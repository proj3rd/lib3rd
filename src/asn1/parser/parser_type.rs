// Type-parsing rules from grammar3rd.g4: asnType, builtinType, sequenceType,
// choiceType, enumeratedType, integerType, etc.

use crate::asn1::ast::*;
use crate::asn1::lexer::TokenKind;
use super::Parser;
use super::PResult;

impl Parser {
    pub(crate) fn is_builtin_type_start(&self, kind: &TokenKind) -> bool {
        matches!(kind,
            TokenKind::Boolean | TokenKind::Integer | TokenKind::Sequence |
            TokenKind::Set | TokenKind::Choice | TokenKind::Enumerated |
            TokenKind::Octet | TokenKind::Bit | TokenKind::Object |
            TokenKind::Null | TokenKind::BmpString | TokenKind::GraphicString |
            TokenKind::Ia5String | TokenKind::Iso646String | TokenKind::NumericString |
            TokenKind::PrintableString | TokenKind::TeletextString | TokenKind::T61String |
            TokenKind::UniversalString | TokenKind::Utf8String | TokenKind::VideotexString |
            TokenKind::VisibleString
        )
    }

    /// Returns true if the current token can start a `value`.
    pub(crate) fn is_value_start(&self) -> bool {
        matches!(self.peek(), Some(k) if matches!(k,
            TokenKind::Number(_) | TokenKind::Minus |
            TokenKind::True | TokenKind::False |
            TokenKind::TrueSmall | TokenKind::FalseSmall |
            TokenKind::CString(_) | TokenKind::BString(_) | TokenKind::HString(_) |
            TokenKind::LBrace | TokenKind::Ident(_)
        ))
    }

    // asnType : (builtinType | referencedType) constraint*
    pub(crate) fn parse_asn_type(&mut self) -> PResult<AsnType> {
        let base = if self.is_builtin_type_start(self.peek().unwrap()) {
            TypeBase::Builtin(Box::new(self.parse_builtin_type()?))
        } else {
            TypeBase::Referenced(self.parse_referenced_type()?)
        };
        let mut constraints = Vec::new();
        while self.check(&TokenKind::LParan) {
            constraints.push(self.parse_constraint()?);
        }
        Ok(AsnType { base: Box::new(base), constraints })
    }

    fn parse_builtin_type(&mut self) -> PResult<BuiltinType> {
        let kind = self.peek().cloned().unwrap();
        self.bump();
        let bt = match kind {
            TokenKind::Boolean => BuiltinType::Boolean,
            TokenKind::Null => BuiltinType::Null,
            TokenKind::Octet => {
                self.expect(&TokenKind::String)?;
                BuiltinType::OctetString
            }
            TokenKind::Bit => {
                self.expect(&TokenKind::String)?;
                let bits = if self.eat(&TokenKind::LBrace) {
                    let list = self.parse_named_bit_list()?;
                    self.expect(&TokenKind::RBrace)?;
                    Some(list)
                } else {
                    None
                };
                BuiltinType::BitString(bits)
            }
            TokenKind::Integer => {
                let list = if self.eat(&TokenKind::LBrace) {
                    let l = self.parse_named_number_list()?;
                    self.expect(&TokenKind::RBrace)?;
                    Some(l)
                } else {
                    None
                };
                BuiltinType::Integer(list)
            }
            TokenKind::Sequence => {
                // SEQUENCE OF  vs  SEQUENCE { ... }
                if self.check(&TokenKind::Of) {
                    self.bump();
                    BuiltinType::SequenceOf(Box::new(self.parse_sequence_of_type()?))
                } else {
                    BuiltinType::Sequence(self.parse_sequence_type()?)
                }
            }
            TokenKind::Set => {
                if self.check(&TokenKind::Of) {
                    self.bump();
                    BuiltinType::SetOf(Box::new(self.parse_set_of_type()?))
                } else {
                    BuiltinType::Set(self.parse_set_type()?)
                }
            }
            TokenKind::Choice => BuiltinType::Choice(self.parse_choice_type()?),
            TokenKind::Enumerated => BuiltinType::Enumerated(Box::new(self.parse_enumerated_type()?)),
            TokenKind::Object => {
                self.expect(&TokenKind::Identifier)?;
                BuiltinType::ObjectIdentifier
            }
            // character string literals
            TokenKind::BmpString => BuiltinType::CharacterString(RestrictedCharacterStringType::Bmp),
            TokenKind::GraphicString => BuiltinType::CharacterString(RestrictedCharacterStringType::Graphic),
            TokenKind::Ia5String => BuiltinType::CharacterString(RestrictedCharacterStringType::Ia5),
            TokenKind::Iso646String => BuiltinType::CharacterString(RestrictedCharacterStringType::Iso646),
            TokenKind::NumericString => BuiltinType::CharacterString(RestrictedCharacterStringType::Numeric),
            TokenKind::PrintableString => BuiltinType::CharacterString(RestrictedCharacterStringType::Printable),
            TokenKind::TeletextString => BuiltinType::CharacterString(RestrictedCharacterStringType::Teletext),
            TokenKind::T61String => BuiltinType::CharacterString(RestrictedCharacterStringType::T61),
            TokenKind::UniversalString => BuiltinType::CharacterString(RestrictedCharacterStringType::Universal),
            TokenKind::Utf8String => BuiltinType::CharacterString(RestrictedCharacterStringType::Utf8),
            TokenKind::VideotexString => BuiltinType::CharacterString(RestrictedCharacterStringType::Videotex),
            TokenKind::VisibleString => BuiltinType::CharacterString(RestrictedCharacterStringType::Visible),
            other => return Err(self.err(format!("not a builtin type start: {:?}", other))),
        };
        Ok(bt)
    }

    // -- referencedType / definedType --------------------------------------
    // definedType : IDENTIFIER (DOT IDENTIFIER)? actualParameterList?
    fn parse_referenced_type(&mut self) -> PResult<ReferencedType> {
        let name = self.ident()?;
        let dot_name = if self.eat(&TokenKind::Dot) {
            Some(self.ident()?)
        } else {
            None
        };
        let params = if self.check(&TokenKind::LBrace) && self.could_be_actual_param_list() {
            Some(self.parse_actual_parameter_list()?)
        } else {
            None
        };
        Ok(ReferencedType {
            defined: DefinedType { name, dot_name, params },
        })
    }

    /// Heuristic: a `{` that is followed by a type or value start (not `}` and
    /// not an objId component) is likely an actualParameterList.
    fn could_be_actual_param_list(&self) -> bool {
        if let Some(n) = self.peek_at(1) {
            !matches!(n, TokenKind::RBrace | TokenKind::Number(_))
        } else {
            false
        }
    }

    // -- SEQUENCE / SET ----------------------------------------------------

    fn parse_sequence_type(&mut self) -> PResult<SequenceType> {
        self.expect(&TokenKind::LBrace)?;
        let body = if self.eat(&TokenKind::RBrace) {
            None
        } else if self.check(&TokenKind::Ellipsis) {
            // extensionAndException optionalExtensionMarker
            self.bump();
            let exception = self.parse_exception_spec_opt();
            let optional_marker = if self.eat(&TokenKind::Comma) {
                self.eat(&TokenKind::Ellipsis)
            } else {
                false
            };
            self.expect(&TokenKind::RBrace)?;
            Some(SequenceBody::ExtensionOnly { exception, optional_marker })
        } else {
            let lists = self.parse_component_type_lists()?;
            self.expect(&TokenKind::RBrace)?;
            Some(SequenceBody::List(lists))
        };
        Ok(SequenceType { body })
    }

    fn parse_set_type(&mut self) -> PResult<SetType> {
        self.expect(&TokenKind::LBrace)?;
        let body = if self.eat(&TokenKind::RBrace) {
            None
        } else if self.check(&TokenKind::Ellipsis) {
            self.bump();
            let exception = self.parse_exception_spec_opt();
            let optional_marker = if self.eat(&TokenKind::Comma) {
                self.eat(&TokenKind::Ellipsis)
            } else {
                false
            };
            self.expect(&TokenKind::RBrace)?;
            Some(SequenceBody::ExtensionOnly { exception, optional_marker })
        } else {
            let lists = self.parse_component_type_lists()?;
            self.expect(&TokenKind::RBrace)?;
            Some(SequenceBody::List(lists))
        };
        Ok(SetType { body })
    }

    // componentTypeLists (simplified from the grammar's multi-alt form)
    pub(crate) fn parse_component_type_lists(&mut self) -> PResult<ComponentTypeLists> {
        let root = self.parse_component_type_list()?;

        // No comma/ellipsis after root -> just root.
        if !self.check(&TokenKind::Comma) && !self.check(&TokenKind::Ellipsis) {
            return Ok(ComponentTypeLists::Root(root));
        }

        // root COMMA? extensionAndException extensionAdditions ...
        // or root COMMA? ELLIPSIS (extensionAndException is `...` alone)
        // The grammar merges these; we handle the common shapes.
        // Note: parse_component_type_list may have already consumed the comma
        // before the ellipsis, so we could be sitting on Ellipsis directly.
        if self.check(&TokenKind::Comma) && self.check_at(1, &TokenKind::Ellipsis) {
            self.bump(); // comma
            self.bump(); // ellipsis
            let exception = self.parse_exception_spec_opt();
            let additions = self.parse_extension_additions();
            let final_part = self.parse_extension_final_part();
            return Ok(ComponentTypeLists::RootAndExtension {
                root,
                exception,
                additions,
                final_part,
            });
        }

        // Bare ellipsis (comma already consumed by component_type_list).
        if self.check(&TokenKind::Ellipsis) {
            self.bump();
            let exception = self.parse_exception_spec_opt();
            let additions = self.parse_extension_additions();
            let final_part = self.parse_extension_final_part();
            return Ok(ComponentTypeLists::RootAndExtension {
                root,
                exception,
                additions,
                final_part,
            });
        }

        // root COMMA tag? extensionAndException extensionAdditions ...
        if self.check(&TokenKind::Comma) {
            self.bump();
            let _tag = self.parse_tag_opt();
            if self.check(&TokenKind::Ellipsis) {
                self.bump();
                let exception = self.parse_exception_spec_opt();
                let additions = self.parse_extension_additions();
                let final_part = self.parse_extension_final_part();
                return Ok(ComponentTypeLists::RootAndExtension {
                    root,
                    exception,
                    additions,
                    final_part,
                });
            }
        }

        Ok(ComponentTypeLists::Root(root))
    }

    fn parse_extension_final_part(&mut self) -> Option<ExtensionFinalPart> {
        // (COMMA tag? ELLIPSIS (COMMA rootComponentTypeList tag?)?)?
        if !self.check(&TokenKind::Comma) && !self.check(&TokenKind::Ellipsis) {
            return None;
        }
        if self.eat(&TokenKind::Comma) {
            let _ = self.parse_tag_opt();
        }
        let has_ellipsis = self.eat(&TokenKind::Ellipsis);
        let final_list = if self.eat(&TokenKind::Comma) {
            let _ = self.parse_tag_opt();
            Some(self.parse_component_type_list().ok()?)
        } else {
            None
        };
        Some(ExtensionFinalPart { has_ellipsis, final_list })
    }

    fn parse_component_type_list(&mut self) -> PResult<ComponentTypeList> {
        let mut components = vec![self.parse_component_type()?];
        loop {
            if self.eat(&TokenKind::Comma) {
                let _tag = self.parse_tag_opt();
                if self.check(&TokenKind::RBrace) || self.check(&TokenKind::Ellipsis) {
                    break;
                }
                components.push(self.parse_component_type()?);
            } else {
                break;
            }
        }
        Ok(ComponentTypeList { components })
    }

    fn parse_component_type(&mut self) -> PResult<ComponentType> {
        let tag = self.parse_tag_opt();
        // COMPONENTS OF asnType  |  namedType (OPTIONAL | DEFAULT value)?
        if self.eat(&TokenKind::Components) {
            self.expect(&TokenKind::Of)?;
            let ty = self.parse_asn_type()?;
            return Ok(ComponentType { tag, inner: ComponentTypeInner::ComponentsOf(ty) });
        }
        let named = self.parse_named_type()?;
        let inner = if self.eat(&TokenKind::Optional) {
            ComponentTypeInner::NamedType { named, optional: true, default: None }
        } else if self.eat(&TokenKind::Default) {
            let v = self.parse_value()?;
            ComponentTypeInner::NamedType { named, optional: false, default: Some(v) }
        } else {
            ComponentTypeInner::NamedType { named, optional: false, default: None }
        };
        Ok(ComponentType { tag, inner })
    }

    pub(crate) fn parse_named_type(&mut self) -> PResult<NamedType> {
        let name = self.ident()?;
        let ty = self.parse_asn_type()?;
        Ok(NamedType { name, ty })
    }

    // extensionAdditions : (COMMA extensionAdditionList)?
    fn parse_extension_additions(&mut self) -> ExtensionAdditions {
        let mut additions = Vec::new();
        while self.eat(&TokenKind::Comma) {
            let _tag = self.parse_tag_opt();
            if self.check(&TokenKind::DoubleLBracket) {
                // extensionAdditionGroup
                self.bump();
                let version = if self.check_number() && self.check_at(1, &TokenKind::Colon) {
                    let n = if let TokenKind::Number(n) = self.bump() { n } else { 0 };
                    self.bump(); // colon
                    Some(n)
                } else {
                    None
                };
                let list = self.parse_component_type_list().ok().unwrap_or(ComponentTypeList { components: vec![] });
                let _ = self.parse_tag_opt();
                self.eat(&TokenKind::DoubleRBracket);
                additions.push(ExtensionAddition::Group(ExtensionAdditionGroup { version, list }));
            } else if self.check(&TokenKind::RBrace) || self.check(&TokenKind::Ellipsis) || self.check(&TokenKind::Comma) {
                // empty / end
                if self.check(&TokenKind::Comma) {
                    continue;
                }
                break;
            } else {
                let ct = match self.parse_component_type() {
                    Ok(c) => c,
                    Err(_) => break,
                };
                additions.push(ExtensionAddition::ComponentType(ct));
            }
        }
        ExtensionAdditions { additions }
    }

    // -- tag (comment-based) ------------------------------------------------

    fn parse_tag_opt(&mut self) -> Option<Tag> {
        // The grammar's `tag` rule matches a `TAG` token which is a `-- ...` comment.
        // Our lexer skips comments, so tags are not produced. We return None.
        None
    }

    // -- SEQUENCE OF / SET OF ----------------------------------------------

    fn parse_sequence_of_type(&mut self) -> PResult<SequenceOfType> {
        let constraint = if self.eat(&TokenKind::LParan) {
            let c = if self.check(&TokenKind::Size) {
                Some(SeqOfConstraint::Size(self.parse_size_constraint_inner()?))
            } else {
                Some(SeqOfConstraint::Constraint(Box::new(self.parse_constraint_inner()?)))
            };
            self.expect(&TokenKind::RParan)?;
            c
        } else {
            None
        };
        self.expect(&TokenKind::Of)?;
        let inner = self.parse_seq_of_inner()?;
        Ok(SequenceOfType { constraint, inner })
    }

    fn parse_set_of_type(&mut self) -> PResult<SetOfType> {
        let constraint = if self.eat(&TokenKind::LParan) {
            let c = if self.check(&TokenKind::Size) {
                Some(SeqOfConstraint::Size(self.parse_size_constraint_inner()?))
            } else {
                Some(SeqOfConstraint::Constraint(Box::new(self.parse_constraint_inner()?)))
            };
            self.expect(&TokenKind::RParan)?;
            c
        } else {
            None
        };
        self.expect(&TokenKind::Of)?;
        let inner = self.parse_seq_of_inner()?;
        Ok(SetOfType { constraint, inner })
    }

    fn parse_seq_of_inner(&mut self) -> PResult<SeqOfInner> {
        // asnType | namedType. A namedType is IDENTIFIER followed by a type.
        // Lookahead: IDENTIFIER followed by a type-start token => namedType.
        if matches!(self.peek(), Some(TokenKind::Ident(_))) {
            let saved = self.pos;
            let name = self.ident()?;
            if let Some(k) = self.peek() {
                if self.is_builtin_type_start(k) || matches!(k, TokenKind::Ident(_)) {
                    let ty = self.parse_asn_type()?;
                    return Ok(SeqOfInner::NamedType(NamedType { name, ty }));
                }
            }
            self.pos = saved;
        }
        let ty = self.parse_asn_type()?;
        Ok(SeqOfInner::Type(ty))
    }

    // -- CHOICE -------------------------------------------------------------

    fn parse_choice_type(&mut self) -> PResult<ChoiceType> {
        self.expect(&TokenKind::LBrace)?;
        let root = self.parse_alternative_type_list()?;
        let mut extension = None;
        let mut extension_marker = false;
        if self.eat(&TokenKind::Comma) {
            if self.check(&TokenKind::Ellipsis) {
                self.bump();
                let _ = self.parse_exception_spec_opt();
                extension = self.parse_extension_addition_alternatives();
                if self.eat(&TokenKind::Comma) {
                    self.eat(&TokenKind::Ellipsis);
                    extension_marker = true;
                }
            }
        } else if self.check(&TokenKind::Ellipsis) {
            // Bare ellipsis: comma already consumed by alternative_type_list.
            self.bump();
            let _ = self.parse_exception_spec_opt();
            extension = self.parse_extension_addition_alternatives();
            if self.eat(&TokenKind::Comma) {
                self.eat(&TokenKind::Ellipsis);
                extension_marker = true;
            }
        }
        self.expect(&TokenKind::RBrace)?;
        Ok(ChoiceType {
            alternatives: AlternativeTypeLists { root, extension, extension_marker },
        })
    }

    fn parse_alternative_type_list(&mut self) -> PResult<Vec<NamedType>> {
        let mut out = vec![self.parse_named_type()?];
        while self.eat(&TokenKind::Comma) {
            if self.check(&TokenKind::Ellipsis) || self.check(&TokenKind::RBrace) {
                break;
            }
            out.push(self.parse_named_type()?);
        }
        Ok(out)
    }

    fn parse_extension_addition_alternatives(&mut self) -> Option<ExtensionAdditionAlternatives> {
        let mut additions = Vec::new();
        while self.eat(&TokenKind::Comma) {
            if self.check(&TokenKind::DoubleLBracket) {
                self.bump();
                let version = if self.check_number() && self.check_at(1, &TokenKind::Colon) {
                    let n = if let TokenKind::Number(n) = self.bump() { n } else { 0 };
                    self.bump();
                    Some(n)
                } else {
                    None
                };
                let mut list = Vec::new();
                loop {
                    list.push(self.parse_named_type().ok()?);
                    if !self.eat(&TokenKind::Comma) {
                        break;
                    }
                }
                self.eat(&TokenKind::DoubleRBracket);
                additions.push(ExtensionAdditionAlternative::Group(ExtensionAdditionAlternativesGroup { version, list }));
            } else {
                let nt = self.parse_named_type().ok()?;
                additions.push(ExtensionAdditionAlternative::NamedType(nt));
            }
        }
        if additions.is_empty() {
            None
        } else {
            Some(ExtensionAdditionAlternatives { additions })
        }
    }

    // -- ENUMERATED ---------------------------------------------------------

    fn parse_enumerated_type(&mut self) -> PResult<EnumeratedType> {
        self.expect(&TokenKind::LBrace)?;
        let root = self.parse_enumeration()?;
        let extension = if self.eat(&TokenKind::Comma) {
            if self.check(&TokenKind::Ellipsis) {
                self.bump();
                let exception = self.parse_exception_spec_opt();
                let additional = if self.eat(&TokenKind::Comma) {
                    self.parse_enumeration().ok().unwrap_or(Enumeration { items: vec![] })
                } else {
                    Enumeration { items: vec![] }
                };
                Some(Box::new(EnumerationExtension { exception, additional }))
            } else {
                None
            }
        } else {
            None
        };
        self.expect(&TokenKind::RBrace)?;
        Ok(EnumeratedType { root, extension })
    }

    fn parse_enumeration(&mut self) -> PResult<Enumeration> {
        let mut items = vec![self.parse_enumeration_item()?];
        while self.eat(&TokenKind::Comma) {
            if self.check(&TokenKind::Ellipsis) || self.check(&TokenKind::RBrace) {
                break;
            }
            items.push(self.parse_enumeration_item()?);
        }
        Ok(Enumeration { items })
    }

    fn parse_enumeration_item(&mut self) -> PResult<EnumerationItem> {
        // IDENTIFIER | namedNumber | value
        if matches!(self.peek(), Some(TokenKind::Ident(_)))
            && !self.check_at(1, &TokenKind::LParan)
        {
            let name = self.ident()?;
            return Ok(EnumerationItem::Ident(name));
        }
        // namedNumber : IDENTIFIER ( signedNumber | definedValue )
        if matches!(self.peek(), Some(TokenKind::Ident(_))) && self.check_at(1, &TokenKind::LParan) {
            let name = self.ident()?;
            self.expect(&TokenKind::LParan)?;
            let value = if self.check(&TokenKind::Minus) || matches!(self.peek(), Some(TokenKind::Number(_))) {
                NamedNumberValue::SignedNumber(self.parse_signed_number()?)
            } else {
                NamedNumberValue::DefinedValue(self.parse_defined_value()?)
            };
            self.expect(&TokenKind::RParan)?;
            return Ok(EnumerationItem::NamedNumber(NamedNumber { name, value }));
        }
        // value (e.g. a number or signed number)
        let v = self.parse_value()?;
        Ok(EnumerationItem::Value(v))
    }

    // -- namedNumberList / namedBitList ------------------------------------

    fn parse_named_number_list(&mut self) -> PResult<NamedNumberList> {
        let mut numbers = vec![self.parse_named_number()?];
        while self.eat(&TokenKind::Comma) {
            numbers.push(self.parse_named_number()?);
        }
        Ok(NamedNumberList { numbers })
    }

    fn parse_named_number(&mut self) -> PResult<NamedNumber> {
        let name = self.ident()?;
        self.expect(&TokenKind::LParan)?;
        let value = if self.check(&TokenKind::Minus) || matches!(self.peek(), Some(TokenKind::Number(_))) {
            NamedNumberValue::SignedNumber(self.parse_signed_number()?)
        } else {
            NamedNumberValue::DefinedValue(self.parse_defined_value()?)
        };
        self.expect(&TokenKind::RParan)?;
        Ok(NamedNumber { name, value })
    }

    fn parse_named_bit_list(&mut self) -> PResult<NamedBitList> {
        let mut bits = vec![self.parse_named_bit()?];
        while self.eat(&TokenKind::Comma) {
            bits.push(self.parse_named_bit()?);
        }
        Ok(NamedBitList { bits })
    }

    fn parse_named_bit(&mut self) -> PResult<NamedBit> {
        let name = self.ident()?;
        self.expect(&TokenKind::LParan)?;
        let value = if matches!(self.peek(), Some(TokenKind::Number(_))) {
            NamedBitValue::Number(self.number()?)
        } else {
            NamedBitValue::DefinedValue(self.parse_defined_value()?)
        };
        self.expect(&TokenKind::RParan)?;
        Ok(NamedBit { name, value })
    }

    // -- exceptionSpec ------------------------------------------------------

    pub(crate) fn parse_exception_spec_opt(&mut self) -> Option<Box<ExceptionSpec>> {
        if self.eat(&TokenKind::Exclam) {
            let ident = self.parse_exception_identification().ok()?;
            Some(Box::new(ExceptionSpec { ident }))
        } else {
            None
        }
    }

    fn parse_exception_identification(&mut self) -> PResult<ExceptionIdentification> {
        if self.check(&TokenKind::Minus) || matches!(self.peek(), Some(TokenKind::Number(_))) {
            return Ok(ExceptionIdentification::SignedNumber(self.parse_signed_number()?));
        }
        // asnType COLON value  -- if current is a type-start and after the type there's a colon
        if let Some(k) = self.peek() {
            if self.is_builtin_type_start(k) || matches!(k, TokenKind::Ident(_)) {
                let saved = self.pos;
                if let Ok(ty) = self.parse_asn_type() {
                    if self.eat(&TokenKind::Colon) {
                        let v = self.parse_value()?;
                        return Ok(ExceptionIdentification::TypeValue { ty, value: v });
                    }
                }
                self.pos = saved;
            }
        }
        let dv = self.parse_defined_value()?;
        Ok(ExceptionIdentification::DefinedValue(dv))
    }
}
