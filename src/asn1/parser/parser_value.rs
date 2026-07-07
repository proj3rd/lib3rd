// Value-parsing rules from grammar3rd.g4.

use super::{Parser, PResult};
use crate::asn1::ast::*;
use crate::asn1::lexer::TokenKind;

impl Parser {
    // value : builtinValue
    pub(crate) fn parse_value(&mut self) -> PResult<Value> {
        let inner = self.parse_builtin_value()?;
        Ok(Value { inner })
    }

    fn parse_builtin_value(&mut self) -> PResult<BuiltinValue> {
        match self.peek().cloned() {
            Some(TokenKind::True) => {
                self.bump();
                Ok(BuiltinValue::Boolean(BooleanValue::True))
            }
            Some(TokenKind::False) => {
                self.bump();
                Ok(BuiltinValue::Boolean(BooleanValue::False))
            }
            Some(TokenKind::TrueSmall) => {
                self.bump();
                Ok(BuiltinValue::Boolean(BooleanValue::TrueSmall))
            }
            Some(TokenKind::FalseSmall) => {
                self.bump();
                Ok(BuiltinValue::Boolean(BooleanValue::FalseSmall))
            }
            Some(TokenKind::CString(s)) => {
                self.bump();
                Ok(BuiltinValue::CString(s))
            }
            Some(TokenKind::BString(s)) => {
                self.bump();
                Ok(BuiltinValue::BString(s))
            }
            Some(TokenKind::HString(s)) => {
                self.bump();
                // Grammar maps HSTRING into BSTRING via BSTRING rule; keep as BString.
                Ok(BuiltinValue::BString(s))
            }
            Some(TokenKind::Minus) | Some(TokenKind::Number(_)) => {
                // integerValue : signedNumber | IDENTIFIER  -- signedNumber starts with MINUS or NUMBER
                let sn = self.parse_signed_number()?;
                Ok(BuiltinValue::Integer(IntegerValue::SignedNumber(sn)))
            }
            Some(TokenKind::LBrace) => {
                // Could be an objectIdentifierValue or a SEQUENCE/SET value
                // (named-value-list). The grammar only defines objectIdentifierValue
                // for `{ ... }`, but in practice SEQUENCE values are common.
                // Try OID first; if it fails, fall back to named-value-list.
                let saved = self.pos;
                match self.parse_object_identifier_value() {
                    Ok(oid) => Ok(BuiltinValue::ObjectIdentifier(oid)),
                    Err(_) => {
                        self.pos = saved;
                        self.parse_named_value_list()
                    }
                }
            }
            Some(TokenKind::Ident(_)) => {
                // enumeratedValue | integerValue(IDENTIFIER) | choiceValue(ident : value)
                // choiceValue: IDENTIFIER COLON value
                if self.check_at(1, &TokenKind::Colon) {
                    let name = self.ident()?;
                    self.bump(); // colon
                    let v = self.parse_value()?;
                    return Ok(BuiltinValue::Choice(ChoiceValue { name, value: Box::new(v) }));
                }
                // IDENTIFIER could be an enumerated value or an integer named value.
                // The grammar distinguishes by context (which builtinValue alternative),
                // but the rule as written just has `enumeratedValue : IDENTIFIER` and
                // `integerValue : IDENTIFIER`. We default to enumerated.
                let name = self.ident()?;
                Ok(BuiltinValue::Enumerated(name))
            }
            other => Err(self.err(format!("expected value, got {:?}", other))),
        }
    }

    // objectIdentifierValue : L_BRACE objIdComponentsList R_BRACE
    fn parse_object_identifier_value(&mut self) -> PResult<ObjectIdentifierValue> {
        self.expect(&TokenKind::LBrace)?;
        let mut components = Vec::new();
        while !self.check(&TokenKind::RBrace) && !self.at_end() {
            components.push(self.parse_obj_id_component()?);
        }
        self.expect(&TokenKind::RBrace)?;
        Ok(ObjectIdentifierValue { components })
    }

    fn parse_obj_id_component(&mut self) -> PResult<ObjIdComponent> {
        // NUMBER
        if matches!(self.peek(), Some(TokenKind::Number(_))) {
            return Ok(ObjIdComponent::Number(self.number()?));
        }
        // IDENTIFIER ( L_PARAN (NUMBER | definedValue) R_PARAN )?
        // | definedValue
        // | builtinType constraint?   (3GPP syntactic sugar)
        if matches!(self.peek(), Some(TokenKind::Ident(_))) {
            let saved = self.pos;
            let name = self.ident()?;
            if self.eat(&TokenKind::LParan) {
                let inner = if matches!(self.peek(), Some(TokenKind::Number(_))) {
                    NamedNumberComponent::Number(self.number()?)
                } else {
                    NamedNumberComponent::DefinedValue(self.parse_defined_value()?)
                };
                self.expect(&TokenKind::RParan)?;
                return Ok(ObjIdComponent::NamedNumber { name, inner });
            }
            // If next token is a type-start, this is builtinType constraint?
            // (rare in OID context). Otherwise it's a definedValue.
            // We treat a lone ident as definedValue.
            let _ = saved;
            return Ok(ObjIdComponent::DefinedValue(DefinedValue {
                inner: ParameterizedValue {
                    simple: SimpleDefinedValue { name, dot_name: None },
                    params: None,
                },
            }));
        }
        // builtinType constraint? (3GPP extension)
        if let Some(k) = self.peek() {
            if self.is_builtin_type_start(k) {
                let ty = self.parse_asn_type()?;
                let constraint = if self.check(&TokenKind::LParan) {
                    Some(self.parse_constraint()?)
                } else {
                    None
                };
                return Ok(ObjIdComponent::BuiltinType { ty, constraint });
            }
        }
        Err(self.err("expected objIdComponent"))
    }

    /// Parse a SEQUENCE/SET value: `{ name value, name value, ... }`.
    /// Each element is `IDENTIFIER value` or `IDENTIFIER : value` (choice-style).
    fn parse_named_value_list(&mut self) -> PResult<BuiltinValue> {
        self.expect(&TokenKind::LBrace)?;
        let mut fields = Vec::new();
        while !self.check(&TokenKind::RBrace) && !self.at_end() {
            let name = self.ident()?;
            // Optional colon (choice-style) — consume if present.
            self.eat(&TokenKind::Colon);
            let value = self.parse_value()?;
            fields.push(NamedFieldValue { name, value });
            if !self.eat(&TokenKind::Comma) {
                break;
            }
        }
        self.expect(&TokenKind::RBrace)?;
        Ok(BuiltinValue::NamedValueList(fields))
    }
}
