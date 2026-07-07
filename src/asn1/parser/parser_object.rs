// Object-class / object / objectSet rules from grammar3rd.g4.

use super::{Parser, PResult};
use crate::asn1::ast::*;
use crate::asn1::lexer::TokenKind;

impl Parser {
    // objectClass : definedObjectClass | objectClassDefn
    pub(crate) fn parse_object_class(&mut self) -> PResult<ObjectClass> {
        if self.check(&TokenKind::Class) {
            let defn = self.parse_object_class_defn()?;
            return Ok(ObjectClass { inner: ObjectClassInner::Defn(defn) });
        }
        let oc = self.parse_defined_object_class()?;
        Ok(ObjectClass { inner: ObjectClassInner::Defined(oc) })
    }

    // definedObjectClass : (IDENTIFIER DOT)? IDENTIFIER | TYPE-Identifier | ABSTRACT-SYNTAX
    pub(crate) fn parse_defined_object_class(&mut self) -> PResult<DefinedObjectClass> {
        if self.eat(&TokenKind::TypeIdentifier) {
            return Ok(DefinedObjectClass {
                module: None,
                name: std::rc::Rc::from("TYPE-Identifier"),
                kind: DefinedObjectClassKind::TypeIdentifier,
            });
        }
        if self.eat(&TokenKind::AbstractSyntax) {
            return Ok(DefinedObjectClass {
                module: None,
                name: std::rc::Rc::from("ABSTRACT-SYNTAX"),
                kind: DefinedObjectClassKind::AbstractSyntax,
            });
        }
        let name = self.ident()?;
        let (module, name) = if self.eat(&TokenKind::Dot) {
            let inner = self.ident()?;
            (Some(name), inner)
        } else {
            (None, name)
        };
        Ok(DefinedObjectClass { module, name, kind: DefinedObjectClassKind::Reference })
    }

    // objectClassDefn : CLASS { fieldSpec (, fieldSpec)* } withSyntaxSpec?
    fn parse_object_class_defn(&mut self) -> PResult<ObjectClassDefn> {
        self.expect(&TokenKind::Class)?;
        self.expect(&TokenKind::LBrace)?;
        let mut fields = vec![self.parse_field_spec()?];
        while self.eat(&TokenKind::Comma) {
            fields.push(self.parse_field_spec()?);
        }
        self.expect(&TokenKind::RBrace)?;
        let syntax = if self.check(&TokenKind::With) && self.check_at(1, &TokenKind::Syntax) {
            Some(self.parse_with_syntax_spec()?)
        } else {
            None
        };
        Ok(ObjectClassDefn { fields, syntax })
    }

    fn parse_with_syntax_spec(&mut self) -> PResult<WithSyntaxSpec> {
        self.expect(&TokenKind::With)?;
        self.expect(&TokenKind::Syntax)?;
        let list = self.parse_syntax_list()?;
        Ok(WithSyntaxSpec { list })
    }

    // syntaxList : { tokenOrGroupSpec+ }
    fn parse_syntax_list(&mut self) -> PResult<SyntaxList> {
        self.expect(&TokenKind::LBrace)?;
        let mut tokens = Vec::new();
        while !self.check(&TokenKind::RBrace) && !self.at_end() {
            tokens.push(self.parse_token_or_group_spec()?);
        }
        self.expect(&TokenKind::RBrace)?;
        Ok(SyntaxList { tokens })
    }

    // tokenOrGroupSpec : requiredToken | optionalGroup
    fn parse_token_or_group_spec(&mut self) -> PResult<TokenOrGroupSpec> {
        if self.check(&TokenKind::LBracket) {
            self.bump();
            let mut group = Vec::new();
            while !self.check(&TokenKind::RBracket) && !self.at_end() {
                group.push(self.parse_token_or_group_spec()?);
            }
            self.expect(&TokenKind::RBracket)?;
            return Ok(TokenOrGroupSpec::OptionalGroup(group));
        }
        let rt = self.parse_required_token()?;
        Ok(TokenOrGroupSpec::RequiredToken(rt))
    }

    // requiredToken : literal | primitiveFieldName
    fn parse_required_token(&mut self) -> PResult<RequiredToken> {
        if self.check(&TokenKind::Ampersand) {
            self.bump();
            let name = self.ident()?;
            return Ok(RequiredToken::PrimitiveFieldName(name));
        }
        if self.eat(&TokenKind::Comma) {
            return Ok(RequiredToken::Literal(Literal::Comma));
        }
        if matches!(self.peek(), Some(TokenKind::Ident(_))) {
            let name = self.ident()?;
            return Ok(RequiredToken::Literal(Literal::Ident(name)));
        }
        Err(self.err("expected requiredToken"))
    }

    // fieldSpec — the grammar has a unified rule with several alternatives.
    fn parse_field_spec(&mut self) -> PResult<FieldSpec> {
        // All alternatives start with: & IDENTIFIER
        self.expect(&TokenKind::Ampersand)?;
        let name = self.ident()?;

        // Now the alternatives diverge:
        // 1. typeOptionalitySpec?         -> &IDENT (OPTIONAL | DEFAULT asnType)
        // 2. asnType (valueSetOptionalitySpec? | UNIQUE? valueOptionalitySpec?)
        // 3. fieldName (OPTIONAL | DEFAULT (valueSet | value))
        // 4. definedObjectClass (OPTIONAL | DEFAULT (objectSet | object))

        // Alternative 1: nothing or OPTIONAL/DEFAULT(type) follows.
        if self.check(&TokenKind::Optional) {
            self.bump();
            return Ok(FieldSpec::TypeField {
                name,
                optionality: Some(TypeOptionalitySpec::Optional),
            });
        }
        if self.check(&TokenKind::Default) && self.could_be_type_after_default() {
            self.bump();
            let ty = self.parse_asn_type()?;
            return Ok(FieldSpec::TypeField {
                name,
                optionality: Some(TypeOptionalitySpec::Default(ty)),
            });
        }

        // Alternative 4: definedObjectClass (OPTIONAL | DEFAULT (objectSet | object))
        // definedObjectClass is TYPE-Identifier | ABSTRACT-SYNTAX | (IDENT DOT)? IDENT
        // We already consumed the leading &IDENT. The next token decides:
        if self.check(&TokenKind::TypeIdentifier) || self.check(&TokenKind::AbstractSyntax) {
            let oc = self.parse_defined_object_class()?;
            let optionality = self.parse_object_optionality()?;
            return Ok(FieldSpec::ObjectField { name, object_class: oc, optionality });
        }
        // If next is IDENTIFIER DOT IDENTIFIER -> definedObjectClass (module.name)
        if matches!(self.peek(), Some(TokenKind::Ident(_))) && self.check_at(1, &TokenKind::Dot) {
            let oc = self.parse_defined_object_class()?;
            let optionality = self.parse_object_optionality()?;
            return Ok(FieldSpec::ObjectField { name, object_class: oc, optionality });
        }

        // Alternative 3: fieldName (&IDENT (. &IDENT)*) (OPTIONAL | DEFAULT ...)
        // fieldName starts with & — but we are past the first &IDENT. The next
        // token would be DOT AMPERSAND IDENT.
        if self.check(&TokenKind::Dot) && self.check_at(1, &TokenKind::Ampersand) {
            let field_name = self.parse_field_name_rest()?;
            let optionality = self.parse_variable_type_value_optionality()?;
            return Ok(FieldSpec::VariableTypeValueField {
                name,
                field_name,
                optionality,
            });
        }

        // Alternative 2: asnType (UNIQUE? valueOptionalitySpec? | valueSetOptionalitySpec?)
        // asnType starts with a builtin type keyword or a referenced type (IDENTIFIER).
        // We must be careful: a lone IDENTIFIER here could be a definedObjectClass
        // (alt 4) without a module prefix. The grammar is genuinely ambiguous;
        // we treat an IDENTIFIER not followed by `.` as a type reference (alt 2).
        let ty = self.parse_asn_type()?;

        // valueSetOptionalitySpec?  -> starts with OPTIONAL or DEFAULT valueSet ({...})
        // UNIQUE? valueOptionalitySpec?
        if self.check(&TokenKind::Optional) {
            self.bump();
            return Ok(FieldSpec::FixedTypeValueField {
                name,
                ty,
                unique: false,
                optionality: Some(ValueOptionalitySpec::Optional),
                is_value_set: false,
            });
        }
        if self.check(&TokenKind::Default) {
            self.bump();
            // valueSet starts with '{', value does not.
            if self.check(&TokenKind::LBrace) {
                let vs = self.parse_value_set()?;
                return Ok(FieldSpec::FixedTypeValueField {
                    name,
                    ty,
                    unique: false,
                    optionality: None,
                    is_value_set: true,
                });
            }
            let v = self.parse_value()?;
            return Ok(FieldSpec::FixedTypeValueField {
                name,
                ty,
                unique: false,
                optionality: Some(ValueOptionalitySpec::Default(v)),
                is_value_set: false,
            });
        }
        // UNIQUE? valueOptionalitySpec?
        let unique = self.eat(&TokenKind::Unique);
        let optionality = if self.eat(&TokenKind::Optional) {
            Some(ValueOptionalitySpec::Optional)
        } else if self.eat(&TokenKind::Default) {
            if self.check(&TokenKind::LBrace) {
                // valueSet default — but we're in the value-optionality branch.
                // Treat as valueSet optionality.
                let _vs = self.parse_value_set()?;
                None
            } else {
                Some(ValueOptionalitySpec::Default(self.parse_value()?))
            }
        } else {
            None
        };
        Ok(FieldSpec::FixedTypeValueField {
            name,
            ty,
            unique,
            optionality,
            is_value_set: false,
        })
    }

    fn could_be_type_after_default(&self) -> bool {
        // Used to distinguish alt-1 (DEFAULT asnType) from other alternatives.
        // If the token after DEFAULT can start a type, it's alt-1.
        matches!(self.peek(), Some(k) if self.is_builtin_type_start(k) || matches!(k, TokenKind::Ident(_)))
    }

    fn parse_object_optionality(&mut self) -> PResult<Option<ObjectOptionalitySpec>> {
        if self.eat(&TokenKind::Optional) {
            return Ok(Some(ObjectOptionalitySpec::Optional));
        }
        if self.eat(&TokenKind::Default) {
            let obj = self.parse_object()?;
            return Ok(Some(ObjectOptionalitySpec::Default(obj)));
        }
        Ok(None)
    }

    fn parse_variable_type_value_optionality(&mut self) -> PResult<Option<VariableTypeValueFieldOptionality>> {
        if self.eat(&TokenKind::Optional) {
            return Ok(Some(VariableTypeValueFieldOptionality::Optional));
        }
        if self.eat(&TokenKind::Default) {
            if self.check(&TokenKind::LBrace) {
                let vs = self.parse_value_set()?;
                return Ok(Some(VariableTypeValueFieldOptionality::DefaultValueSet(vs)));
            }
            let v = self.parse_value()?;
            return Ok(Some(VariableTypeValueFieldOptionality::DefaultValue(v)));
        }
        Ok(None)
    }

    // fieldName rest after the first &IDENT: (DOT AMPERSAND IDENT)*
    fn parse_field_name_rest(&mut self) -> PResult<FieldName> {
        // The first &IDENT was already consumed by the caller; we start at DOT.
        let mut parts = Vec::new();
        while self.eat(&TokenKind::Dot) {
            self.expect(&TokenKind::Ampersand)?;
            parts.push(self.ident()?);
        }
        Ok(FieldName { parts })
    }

    // -- fieldName (full, standalone) --------------------------------------
    // fieldName : (AMPERSAND IDENTIFIER)(DOT AMPERSAND IDENTIFIER)*
    pub(crate) fn parse_field_name(&mut self) -> PResult<FieldName> {
        self.expect(&TokenKind::Ampersand)?;
        let first = self.ident()?;
        let mut parts = vec![first];
        while self.eat(&TokenKind::Dot) {
            self.expect(&TokenKind::Ampersand)?;
            parts.push(self.ident()?);
        }
        Ok(FieldName { parts })
    }

    // -- object ------------------------------------------------------------

    // object : definedObject | parameterizedObject
    pub(crate) fn parse_object(&mut self) -> PResult<Object> {
        // definedObject : IDENTIFIER (DOT)?
        // parameterizedObject : definedObject actualParameterList
        let name = self.ident()?;
        let trailing_dot = self.eat(&TokenKind::Dot);
        let defined = DefinedObject { name, trailing_dot };
        let inner = if self.check(&TokenKind::LBrace) {
            // actualParameterList
            let params = self.parse_actual_parameter_list()?;
            ObjectInner::Parameterized(ParameterizedObject { defined, params })
        } else {
            ObjectInner::Defined(defined)
        };
        Ok(Object { inner })
    }

    // -- objectSet ---------------------------------------------------------

    // objectSet : { objectSetSpec }
    pub(crate) fn parse_object_set(&mut self) -> PResult<ObjectSet> {
        self.expect(&TokenKind::LBrace)?;
        let spec = self.parse_object_set_spec()?;
        self.expect(&TokenKind::RBrace)?;
        Ok(ObjectSet { spec })
    }

    fn parse_object_set_spec(&mut self) -> PResult<ObjectSetSpec> {
        // rootElementSetSpec (COMMA ELLIPSIS (COMMA additionalElementSetSpec)?)?
        // | ELLIPSIS (COMMA additionalElementSetSpec)?
        if self.eat(&TokenKind::Ellipsis) {
            let extension = if self.eat(&TokenKind::Comma) {
                Some(AdditionalElementSetSpec { spec: self.parse_element_set_spec()? })
            } else {
                None
            };
            return Ok(ObjectSetSpec { root: None, extension });
        }
        let root = self.parse_element_set_spec()?;
        let extension = if self.eat(&TokenKind::Comma) {
            if self.eat(&TokenKind::Ellipsis) {
                if self.eat(&TokenKind::Comma) {
                    Some(AdditionalElementSetSpec { spec: self.parse_element_set_spec()? })
                } else {
                    None
                }
            } else {
                None
            }
        } else {
            None
        };
        Ok(ObjectSetSpec { root: Some(root), extension })
    }

    // -- valueSet ----------------------------------------------------------

    // valueSet : { elementSetSpecs }
    pub(crate) fn parse_value_set(&mut self) -> PResult<ValueSet> {
        self.expect(&TokenKind::LBrace)?;
        let specs = self.parse_element_set_specs()?;
        self.expect(&TokenKind::RBrace)?;
        Ok(ValueSet { specs })
    }

    // -- objectClassFieldType ---------------------------------------------
    // objectClassFieldType : definedObjectClass DOT fieldName
    pub(crate) fn parse_object_class_field_type(&mut self) -> PResult<ObjectClassFieldType> {
        let object_class = self.parse_defined_object_class()?;
        self.expect(&TokenKind::Dot)?;
        let field_name = self.parse_field_name()?;
        Ok(ObjectClassFieldType { object_class, field_name })
    }
}
