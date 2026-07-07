// Constraint-parsing rules from grammar3rd.g4.

use super::{Parser, PResult};
use crate::asn1::ast::*;
use crate::asn1::lexer::TokenKind;

impl Parser {
    // constraint : L_PARAN constraintSpec exceptionSpec? R_PARAN
    pub(crate) fn parse_constraint(&mut self) -> PResult<Constraint> {
        self.expect(&TokenKind::LParan)?;
        let spec = self.parse_constraint_spec()?;
        let exception = self.parse_exception_spec_opt();
        self.expect(&TokenKind::RParan)?;
        Ok(Constraint { spec, exception })
    }

    /// Parse the inner (constraintSpec exceptionSpec?) without the surrounding parentheses.
    /// Used by SEQUENCE OF / SET OF.
    pub(crate) fn parse_constraint_inner(&mut self) -> PResult<Constraint> {
        let spec = self.parse_constraint_spec()?;
        let exception = self.parse_exception_spec_opt();
        Ok(Constraint { spec, exception })
    }

    // constraintSpec : generalConstraint | subtypeConstraint
    fn parse_constraint_spec(&mut self) -> PResult<ConstraintSpec> {
        // generalConstraint starts: CONSTRAINED BY | { (componentRelation) } | CONTAINING | ENCODED | WITH COMPONENTS
        // subtypeConstraint := elementSetSpecs (starts with value/range/ALL/SIZE/...)
        match self.peek() {
            Some(TokenKind::Constrained) => Ok(ConstraintSpec::General(GeneralConstraint::UserDefined(
                self.parse_user_defined_constraint()?,
            ))),
            Some(TokenKind::Containing) | Some(TokenKind::Encoded) | Some(TokenKind::With) => {
                Ok(ConstraintSpec::General(GeneralConstraint::Contents(self.parse_contents_constraint()?)))
            }
            Some(TokenKind::LBrace) => {
                // componentRelationConstraint : { IDENTIFIER (DOT IDENTIFIER)? } { atNotation ... }?
                let crc = self.parse_component_relation_constraint()?;
                Ok(ConstraintSpec::General(GeneralConstraint::Table(crc)))
            }
            _ => {
                let specs = self.parse_element_set_specs()?;
                Ok(ConstraintSpec::Subtype(SubtypeConstraint { specs }))
            }
        }
    }

    // sizeConstraint : SIZE constraint
    pub(crate) fn parse_size_constraint_inner(&mut self) -> PResult<SizeConstraint> {
        self.expect(&TokenKind::Size)?;
        let inner = self.parse_constraint()?;
        Ok(SizeConstraint { inner: Box::new(inner) })
    }

    // userDefinedConstraint : CONSTRAINED BY { userDefinedConstraintParameter (, ...)* }
    fn parse_user_defined_constraint(&mut self) -> PResult<UserDefinedConstraint> {
        self.expect(&TokenKind::Constrained)?;
        self.expect(&TokenKind::By)?;
        self.expect(&TokenKind::LBrace)?;
        let mut params = vec![self.parse_user_defined_constraint_parameter()?];
        while self.eat(&TokenKind::Comma) {
            params.push(self.parse_user_defined_constraint_parameter()?);
        }
        self.expect(&TokenKind::RBrace)?;
        Ok(UserDefinedConstraint { params })
    }

    fn parse_user_defined_constraint_parameter(&mut self) -> PResult<UserDefinedConstraintParameter> {
        // governor (COLON (value | valueSet | object | objectSet))?
        // governor := asnType | definedObjectClass
        let governor = self.parse_user_constraint_governor()?;
        let value = if self.eat(&TokenKind::Colon) {
            Some(self.parse_user_constraint_param_value()?)
        } else {
            None
        };
        Ok(UserDefinedConstraintParameter { governor, value })
    }

    fn parse_user_constraint_governor(&mut self) -> PResult<Option<Governor>> {
        // Best-effort: a type keyword or a definedObjectClass reference.
        if let Some(k) = self.peek() {
            if self.is_builtin_type_start(k) {
                let ty = self.parse_asn_type()?;
                return Ok(Some(Governor::Type(ty)));
            }
            if matches!(k, TokenKind::TypeIdentifier | TokenKind::AbstractSyntax | TokenKind::Ident(_)) {
                let oc = self.parse_defined_object_class()?;
                return Ok(Some(Governor::ObjectClass(oc)));
            }
        }
        Ok(None)
    }

    fn parse_user_constraint_param_value(&mut self) -> PResult<UserConstraintParamValue> {
        // value | valueSet | object | objectSet
        if self.check(&TokenKind::LBrace) {
            // Could be valueSet or objectSet. Try valueSet (elementSetSpecs).
            let saved = self.pos;
            if let Ok(vs) = self.parse_value_set() {
                return Ok(UserConstraintParamValue::ValueSet(vs));
            }
            self.pos = saved;
            if let Ok(os) = self.parse_object_set() {
                return Ok(UserConstraintParamValue::ObjectSet(os));
            }
        }
        // object: definedObject starts with IDENTIFIER
        if self.check(&TokenKind::LBrace) == false && matches!(self.peek(), Some(TokenKind::Ident(_))) {
            let saved = self.pos;
            if let Ok(obj) = self.parse_object() {
                return Ok(UserConstraintParamValue::Object(obj));
            }
            self.pos = saved;
        }
        let v = self.parse_value()?;
        Ok(UserConstraintParamValue::Value(v))
    }

    // contentsConstraint
    fn parse_contents_constraint(&mut self) -> PResult<ContentsConstraint> {
        if self.eat(&TokenKind::Containing) {
            let ty = self.parse_asn_type()?;
            if self.eat(&TokenKind::Encoded) {
                self.expect(&TokenKind::By)?;
                let v = self.parse_value()?;
                return Ok(ContentsConstraint::ContainingEncodedBy { ty, value: v });
            }
            return Ok(ContentsConstraint::Containing(ty));
        }
        if self.eat(&TokenKind::Encoded) {
            self.expect(&TokenKind::By)?;
            let v = self.parse_value()?;
            return Ok(ContentsConstraint::EncodedBy(v));
        }
        // WITH COMPONENTS { componentPresenceLists }
        self.expect(&TokenKind::With)?;
        self.expect(&TokenKind::Components)?;
        self.expect(&TokenKind::LBrace)?;
        let lists = self.parse_component_presence_lists()?;
        self.expect(&TokenKind::RBrace)?;
        Ok(ContentsConstraint::WithComponents(lists))
    }

    fn parse_component_presence_lists(&mut self) -> PResult<ComponentPresenceLists> {
        // componentPresenceList? (COMMA ELLIPSIS (COMMA componentPresenceList)?)?
        // | ELLIPSIS (COMMA componentPresenceList)?
        let mut initial = None;
        let mut ellipsis = false;
        let mut after = None;

        if self.check(&TokenKind::Ellipsis) {
            self.bump();
            ellipsis = true;
            if self.eat(&TokenKind::Comma) {
                after = Some(self.parse_component_presence_list()?);
            }
        } else {
            if !self.check(&TokenKind::RBrace) {
                initial = Some(self.parse_component_presence_list()?);
            }
            if self.eat(&TokenKind::Comma) {
                if self.eat(&TokenKind::Ellipsis) {
                    ellipsis = true;
                    if self.eat(&TokenKind::Comma) {
                        after = Some(self.parse_component_presence_list()?);
                    }
                }
            }
        }
        Ok(ComponentPresenceLists { initial, ellipsis, after })
    }

    fn parse_component_presence_list(&mut self) -> PResult<Vec<ComponentPresence>> {
        let mut out = vec![self.parse_component_presence()?];
        while self.eat(&TokenKind::Comma) {
            out.push(self.parse_component_presence()?);
        }
        Ok(out)
    }

    fn parse_component_presence(&mut self) -> PResult<ComponentPresence> {
        let name = self.ident()?;
        let presence = if self.eat(&TokenKind::Absent) {
            Presence::Absent
        } else if self.eat(&TokenKind::Present) {
            Presence::Present
        } else {
            return Err(self.err("expected ABSENT or PRESENT"));
        };
        Ok(ComponentPresence { name, presence })
    }

    // componentRelationConstraint : { IDENTIFIER (DOT IDENTIFIER)? } { atNotation ... }?
    fn parse_component_relation_constraint(&mut self) -> PResult<ComponentRelationConstraint> {
        self.expect(&TokenKind::LBrace)?;
        let first = self.ident()?;
        let first_dot = if self.eat(&TokenKind::Dot) {
            Some(self.ident()?)
        } else {
            None
        };
        self.expect(&TokenKind::RBrace)?;
        let at_notations = if self.eat(&TokenKind::LBrace) {
            let mut out = vec![self.parse_at_notation()?];
            while self.eat(&TokenKind::Comma) {
                out.push(self.parse_at_notation()?);
            }
            self.expect(&TokenKind::RBrace)?;
            out
        } else {
            Vec::new()
        };
        Ok(ComponentRelationConstraint { first, first_dot, at_notations })
    }

    fn parse_at_notation(&mut self) -> PResult<AtNotation> {
        // (A_ROND | (A_ROND_DOT level)) componentIdList
        let kind = if self.eat(&TokenKind::AtDot) {
            let level = self.parse_level();
            AtNotationKind::AtDot(level.map(Box::new))
        } else {
            self.expect(&TokenKind::At)?;
            AtNotationKind::At
        };
        // componentIdList : IDENTIFIER (DOT IDENTIFIER)*
        let mut components = vec![self.ident()?];
        while self.eat(&TokenKind::Dot) {
            components.push(self.ident()?);
        }
        Ok(AtNotation { kind, components })
    }

    fn parse_level(&mut self) -> Option<Level> {
        // level : (DOT level)?
        if self.eat(&TokenKind::Dot) {
            Some(Level { inner: self.parse_level().map(Box::new) })
        } else {
            None
        }
    }

    // -- elementSetSpecs / subtypeConstraint -------------------------------

    pub(crate) fn parse_element_set_specs(&mut self) -> PResult<ElementSetSpecs> {
        let root = self.parse_element_set_spec()?;
        let extension = if self.eat(&TokenKind::Comma) {
            if self.eat(&TokenKind::Ellipsis) {
                let additional = if self.eat(&TokenKind::Comma) {
                    Some(AdditionalElementSetSpec { spec: self.parse_element_set_spec()? })
                } else {
                    None
                };
                additional
            } else {
                None
            }
        } else {
            None
        };
        Ok(ElementSetSpecs { root, extension })
    }

    // elementSetSpec : unions | ALL EXCEPT elements
    pub(crate) fn parse_element_set_spec(&mut self) -> PResult<ElementSetSpec> {
        if self.eat(&TokenKind::All) {
            self.expect(&TokenKind::Except)?;
            let exclusions = self.parse_elements()?;
            return Ok(ElementSetSpec::AllExcept(AllExclusions { exclusions }));
        }
        let u = self.parse_unions()?;
        Ok(ElementSetSpec::Unions(u))
    }

    // unions : intersections (unionMark intersections)*
    fn parse_unions(&mut self) -> PResult<Unions> {
        let first = self.parse_intersections()?;
        let mut rest = Vec::new();
        while let Some(mark) = self.try_union_mark() {
            let intersections = self.parse_intersections()?;
            rest.push(UnionMarkIntersections { mark, intersections });
        }
        Ok(Unions { first, rest })
    }

    fn try_union_mark(&mut self) -> Option<UnionMark> {
        let m = match self.peek()? {
            TokenKind::Pipe => UnionMark::Pipe,
            TokenKind::Union => UnionMark::Union,
            _ => return None,
        };
        self.bump();
        Some(m)
    }

    // intersections : intersectionElements (intersectionMark intersectionElements)*
    fn parse_intersections(&mut self) -> PResult<Intersections> {
        let first = self.parse_intersection_elements()?;
        let mut rest = Vec::new();
        while let Some(mark) = self.try_intersection_mark() {
            let el = self.parse_intersection_elements()?;
            rest.push((mark, el));
        }
        Ok(Intersections { first, rest })
    }

    fn try_intersection_mark(&mut self) -> Option<IntersectionMark> {
        let m = match self.peek()? {
            TokenKind::Power => IntersectionMark::Power,
            TokenKind::Intersection => IntersectionMark::Intersection,
            _ => return None,
        };
        self.bump();
        Some(m)
    }

    // intersectionElements : elements (EXCEPT elements)?
    fn parse_intersection_elements(&mut self) -> PResult<IntersectionElement> {
        let elements = self.parse_elements()?;
        let exclusions = if self.eat(&TokenKind::Except) {
            Some(self.parse_elements()?)
        } else {
            None
        };
        Ok(IntersectionElement { elements, exclusions })
    }

    // elements : subtypeElements
    fn parse_elements(&mut self) -> PResult<Elements> {
        Ok(Elements::Subtype(self.parse_subtype_elements()?))
    }

    // subtypeElements : ((value|MIN) LESS_THAN? DOUBLE_DOT LESS_THAN? (value|MAX))
    //                 | sizeConstraint | PATTERN value | value
    fn parse_subtype_elements(&mut self) -> PResult<SubtypeElements> {
        // SIZE constraint
        if self.check(&TokenKind::Size) {
            let sc = self.parse_size_constraint_inner()?;
            return Ok(SubtypeElements::Size(sc));
        }
        // PATTERN value
        if self.eat(&TokenKind::Pattern) {
            let v = self.parse_value()?;
            return Ok(SubtypeElements::Pattern(v));
        }
        // range: (value | MIN) [<] .. [<] (value | MAX)
        // Detect by lookahead: after parsing a value-or-MIN, check for optional `<` then `..`.
        let saved = self.pos;
        let from = if self.eat(&TokenKind::Min) {
            RangeEndpoint::Min
        } else {
            RangeEndpoint::Value(self.parse_value()?)
        };
        let from_lt = self.eat(&TokenKind::LessThan);
        if self.check(&TokenKind::DoubleDot) {
            self.bump();
            let to_lt = self.eat(&TokenKind::LessThan);
            let to = if self.eat(&TokenKind::Max) {
                RangeEndpoint::Max
            } else {
                RangeEndpoint::Value(self.parse_value()?)
            };
            return Ok(SubtypeElements::Range { from, from_lt, to, to_lt });
        }
        // Not a range: rewind if we parsed a value, and emit a single Value.
        self.pos = saved;
        let v = self.parse_value()?;
        Ok(SubtypeElements::Value(v))
    }
}
