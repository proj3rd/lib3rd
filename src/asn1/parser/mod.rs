// Hand-written recursive-descent parser for the grammar3rd.g4 ASN.1 grammar.
// Submodules: type, value, constraint, object.

mod parser_type;
mod parser_value;
mod parser_constraint;
mod parser_object;

use crate::asn1::ast::*;
use crate::asn1::lexer::{Ident, Token, TokenKind};

pub struct Parser {
    toks: Vec<Token>,
    pos: usize,
}

#[derive(Debug, Clone)]
pub struct ParseError {
    pub msg: String,
    pub line: usize,
    pub col: usize,
}

type PResult<T> = Result<T, ParseError>;

impl Parser {
    pub fn new(toks: Vec<Token>) -> Self {
        Self { toks, pos: 0 }
    }

    pub fn parse_modules(&mut self) -> PResult<Vec<ModuleDefinition>> {
        let mut mods = Vec::new();
        while !self.at_end() {
            mods.push(self.parse_module_definition()?);
        }
        Ok(mods)
    }

    // -- token helpers ------------------------------------------------------

    fn peek(&self) -> Option<&TokenKind> {
        self.toks.get(self.pos).map(|t| &t.kind)
    }

    fn peek_at(&self, off: usize) -> Option<&TokenKind> {
        self.toks.get(self.pos + off).map(|t| &t.kind)
    }

    fn at_end(&self) -> bool {
        self.pos >= self.toks.len()
    }

    fn bump(&mut self) -> TokenKind {
        let t = self.toks[self.pos].clone();
        self.pos += 1;
        t.kind
    }

    fn err<S: Into<String>>(&self, msg: S) -> ParseError {
        let (line, col) = self.toks.get(self.pos).map(|t| (t.line, t.col)).unwrap_or((0, 0));
        ParseError { msg: msg.into(), line, col }
    }

    fn expect(&mut self, kind: &TokenKind) -> PResult<()> {
        if self.peek() == Some(kind) {
            self.bump();
            Ok(())
        } else {
            Err(self.err(format!("expected {:?}, got {:?}", kind, self.peek())))
        }
    }

    fn check(&self, kind: &TokenKind) -> bool {
        self.peek() == Some(kind)
    }

    fn check_at(&self, off: usize, kind: &TokenKind) -> bool {
        self.peek_at(off) == Some(kind)
    }

    fn eat(&mut self, kind: &TokenKind) -> bool {
        if self.check(kind) {
            self.bump();
            true
        } else {
            false
        }
    }

    fn check_number(&self) -> bool {
        matches!(self.peek(), Some(TokenKind::Number(_)))
    }

    fn ident(&mut self) -> PResult<Ident> {
        match self.peek() {
            Some(TokenKind::Ident(_)) => match self.bump() {
                TokenKind::Ident(s) => Ok(s),
                _ => unreachable!(),
            },
            other => Err(self.err(format!("expected IDENTIFIER, got {:?}", other))),
        }
    }

    fn number(&mut self) -> PResult<Number> {
        match self.peek() {
            Some(TokenKind::Number(_)) => match self.bump() {
                TokenKind::Number(n) => Ok(n),
                _ => unreachable!(),
            },
            other => Err(self.err(format!("expected NUMBER, got {:?}", other))),
        }
    }

    // -- moduleDefinition ---------------------------------------------------

    fn parse_module_definition(&mut self) -> PResult<ModuleDefinition> {
        let name = self.ident()?;

        // Optional "{ IDENTIFIER ( NUMBER ) ... }"
        let module_id = if self.eat(&TokenKind::LBrace) {
            let mut oid_components = Vec::new();
            // IDENTIFIER ( NUMBER ) *
            loop {
                if self.check(&TokenKind::RBrace) {
                    break;
                }
                if matches!(self.peek(), Some(TokenKind::Ident(_))) && self.check_at(1, &TokenKind::LParan) {
                    let comp_name = self.ident()?;
                    self.expect(&TokenKind::LParan)?;
                    let n = self.number()?;
                    self.expect(&TokenKind::RParan)?;
                    oid_components.push((comp_name, n));
                } else {
                    break;
                }
            }
            self.expect(&TokenKind::RBrace)?;
            Some(ModuleIdentifier { name: name.clone(), oid_components })
        } else {
            None
        };

        self.expect(&TokenKind::Definitions)?;
        let tag_default = self.parse_tag_default();
        let extension_default = self.parse_extension_default();
        self.expect(&TokenKind::Assign)?;
        self.expect(&TokenKind::Begin)?;

        let body = self.parse_module_body()?;

        self.expect(&TokenKind::End)?;

        Ok(ModuleDefinition {
            name,
            module_id,
            tag_default,
            extension_default,
            body,
        })
    }

    fn parse_tag_default(&mut self) -> TagDefault {
        // ( (EXPLICIT|IMPLICIT|AUTOMATIC) TAGS )?
        let td = match self.peek() {
            Some(TokenKind::Explicit) => Some(TagDefault::Explicit),
            Some(TokenKind::Implicit) => Some(TagDefault::Implicit),
            Some(TokenKind::Automatic) => Some(TagDefault::Automatic),
            _ => None,
        };
        if let Some(td) = td {
            self.bump();
            self.expect(&TokenKind::Tags).ok();
            td
        } else {
            TagDefault::Unspecified
        }
    }

    fn parse_extension_default(&mut self) -> ExtensionDefault {
        if self.check(&TokenKind::Extensibility) && self.check_at(1, &TokenKind::Implied) {
            self.bump();
            self.bump();
            ExtensionDefault::Implied
        } else {
            ExtensionDefault::Unspecified
        }
    }

    // -- moduleBody ---------------------------------------------------------

    fn parse_module_body(&mut self) -> PResult<ModuleBody> {
        // (exports imports assignmentList)?
        if self.at_end()
            || self.check(&TokenKind::End)
            || (self.check(&TokenKind::Exports) && false)
        {
            // Quick bail: if next is END, body is empty.
            if self.check(&TokenKind::End) {
                return Ok(ModuleBody::default());
            }
        }

        let exports = self.parse_exports();
        let imports = self.parse_imports();
        let assignments = self.parse_assignment_list()?;

        Ok(ModuleBody { exports, imports, assignments })
    }

    fn parse_exports(&mut self) -> Exports {
        if !self.eat(&TokenKind::Exports) {
            return Exports::None;
        }
        if self.eat(&TokenKind::All) {
            self.expect(&TokenKind::SemiColon).ok();
            return Exports::All;
        }
        // symbolsExported (symbolList)?
        let symbols = if self.check(&TokenKind::SemiColon) {
            Vec::new()
        } else {
            self.parse_symbol_list().unwrap_or_default()
        };
        self.expect(&TokenKind::SemiColon).ok();
        Exports::Symbols(symbols)
    }

    fn parse_symbol_list(&mut self) -> PResult<Vec<Symbol>> {
        let mut out = vec![self.parse_symbol()?];
        while self.eat(&TokenKind::Comma) {
            out.push(self.parse_symbol()?);
        }
        Ok(out)
    }

    fn parse_symbol(&mut self) -> PResult<Symbol> {
        let name = self.ident()?;
        let parameterized = if self.check(&TokenKind::LBrace) && self.check_at(1, &TokenKind::RBrace) {
            self.bump();
            self.bump();
            true
        } else {
            false
        };
        Ok(Symbol { name, parameterized })
    }

    fn parse_imports(&mut self) -> Imports {
        if !self.eat(&TokenKind::Imports) {
            return Imports::default();
        }
        let items = self.parse_symbols_imported().unwrap_or_default();
        self.expect(&TokenKind::SemiColon).ok();
        Imports { items }
    }

    fn parse_symbols_imported(&mut self) -> PResult<Vec<SymbolsFromModule>> {
        if self.check(&TokenKind::SemiColon) || self.check(&TokenKind::End) {
            return Ok(Vec::new());
        }
        let mut out = vec![self.parse_symbols_from_module()?];
        while !self.check(&TokenKind::SemiColon) && !self.check(&TokenKind::End) {
            // The grammar allows multiple symbolsFromModule entries (no separator).
            // They are distinguished by the leading symbolList + FROM.
            out.push(self.parse_symbols_from_module()?);
        }
        Ok(out)
    }

    fn parse_symbols_from_module(&mut self) -> PResult<SymbolsFromModule> {
        let symbols = self.parse_symbol_list()?;
        self.expect(&TokenKind::From)?;
        let module_ref = self.parse_global_module_reference()?;
        Ok(SymbolsFromModule { symbols, module_ref })
    }

    fn parse_global_module_reference(&mut self) -> PResult<GlobalModuleReference> {
        let name = self.ident()?;
        // assignedIdentifier is an empty rule in the grammar; nothing to parse.
        Ok(GlobalModuleReference { name, assigned_identifier: AssignedIdentifier })
    }

    // -- assignmentList / assignment ---------------------------------------

    fn parse_assignment_list(&mut self) -> PResult<Vec<Assignment>> {
        let mut out = Vec::new();
        while !self.check(&TokenKind::End) && !self.at_end() {
            // Skip stray semicolons or empty constructs.
            if self.check(&TokenKind::SemiColon) {
                self.bump();
                continue;
            }
            out.push(self.parse_assignment()?);
        }
        Ok(out)
    }

    fn parse_assignment(&mut self) -> PResult<Assignment> {
        let name = self.ident()?;

        // Dispatch by lookahead.
        // IDENTIFIER parameterList '::='   -> parameterized (type/value)
        // IDENTIFIER definedObjectClass '::=' (object|objectClass|objectSet)
        // IDENTIFIER '::=' asnType          -> typeAssignment
        // IDENTIFIER asnType '::=' value    -> valueAssignment

        // Detect objectClass-style parameterized: "&"-prefixed is not used here;
        // the grammar's second alternative starts with `definedObjectClass ASSIGN_OP`.
        // definedObjectClass can be `IDENTIFIER (DOT IDENTIFIER)?` | TYPE-Identifier | ABSTRACT-SYNTAX.
        // We try parameterizedAssignment first when we see `{` after the name.
        if self.check(&TokenKind::LBrace) {
            // parameterList '{' ... '}'
            let params = self.parse_parameter_list()?;
            self.expect(&TokenKind::Assign)?;
            let inner = self.parse_parameterized_type_inner()?;
            return Ok(Assignment::Parameterized(ParameterizedAssignment::Type {
                name,
                params,
                inner,
            }));
        }

        // Check for definedObjectClass ASSIGN_OP (object|objectClass|objectSet)
        // definedObjectClass := (IDENTIFIER DOT)? IDENTIFIER | TYPE-Identifier | ABSTRACT-SYNTAX
        if self.check(&TokenKind::TypeIdentifier) || self.check(&TokenKind::AbstractSyntax) {
            let obj_class = self.parse_defined_object_class()?;
            self.expect(&TokenKind::Assign)?;
            let inner = self.parse_parameterized_object_inner()?;
            return Ok(Assignment::Parameterized(ParameterizedAssignment::Object {
                name,
                object_class: obj_class,
                inner,
            }));
        }

        // If the next token is `.` and the one after is an IDENTIFIER, this could be
        // a definedObjectClass (module.name). But that conflicts with value/type
        // assignments where `name` is the assignment target. Per the grammar the
        // assignment LHS is a single IDENTIFIER, so `name . ident` on the LHS only
        // occurs in the object-class parameterized form.
        if self.check(&TokenKind::Dot) && matches!(self.peek_at(1), Some(TokenKind::Ident(_))) {
            let obj_class = self.parse_defined_object_class()?;
            self.expect(&TokenKind::Assign)?;
            let inner = self.parse_parameterized_object_inner()?;
            return Ok(Assignment::Parameterized(ParameterizedAssignment::Object {
                name,
                object_class: obj_class,
                inner,
            }));
        }

        // Direct ASSIGN_OP -> typeAssignment OR objectClassAssignment
        if self.check(&TokenKind::Assign) {
            self.bump();
            // objectClassAssignment: ASSIGN_OP objectClass
            // typeAssignment: ASSIGN_OP asnType
            // Disambiguate: objectClass can start with CLASS, TYPE-Identifier,
            // ABSTRACT-SYNTAX, or a definedObjectClass reference (IDENTIFIER (DOT IDENTIFIER)?).
            // But a typeAssignment's asnType can also start with an IDENTIFIER (referencedType).
            // We use a heuristic: if it starts with `CLASS`, treat as objectClass.
            if self.check(&TokenKind::Class) {
                let oc = self.parse_object_class()?;
                return Ok(Assignment::ObjectClass(ObjectClassAssignment { name, object_class: oc }));
            }
            // Otherwise treat as typeAssignment.
            let ty = self.parse_asn_type()?;
            return Ok(Assignment::Type(TypeAssignment { name, ty }));
        }

        // valueAssignment: asnType ASSIGN_OP value
        // (The leading IDENTIFIER we consumed is the value name.)
        let ty = self.parse_asn_type()?;
        self.expect(&TokenKind::Assign)?;
        let value = self.parse_value()?;
        Ok(Assignment::Value(ValueAssignment { name, ty, value }))
    }

    // -- parameterList / parameter -----------------------------------------

    fn parse_parameter_list(&mut self) -> PResult<ParameterList> {
        self.expect(&TokenKind::LBrace)?;
        let mut params = vec![self.parse_parameter()?];
        while self.eat(&TokenKind::Comma) {
            params.push(self.parse_parameter()?);
        }
        self.expect(&TokenKind::RBrace)?;
        Ok(ParameterList { params })
    }

    fn parse_parameter(&mut self) -> PResult<Parameter> {
        // (paramGovernor COLON)? IDENTIFIER
        // paramGovernor := governor | IDENTIFIER
        // governor := asnType | definedObjectClass
        // We need careful lookahead: if we see IDENTIFIER followed by COLON,
        // it's a simple-ident governor. If we see a type keyword followed by
        // COLON, it's a governor-as-type.
        let governor = self.try_parse_param_governor()?;
        let name = self.ident()?;
        Ok(Parameter { governor, name })
    }

    fn try_parse_param_governor(&mut self) -> PResult<Option<ParamGovernor>> {
        // Peek: if the token after a plausible governor is COLON, consume governor + colon.
        // A plausible governor is:
        //   - a builtin type keyword (Boolean, Integer, SEQUENCE, ... etc.)
        //   - TYPE-Identifier / ABSTRACT-SYNTAX (definedObjectClass)
        //   - IDENTIFIER (DOT IDENTIFIER)?  (definedType or definedObjectClass)
        // Then a COLON must follow.
        let saved = self.pos;
        if let Some(kind) = self.peek() {
            if self.is_builtin_type_start(kind) {
                let ty = self.parse_asn_type()?;
                if self.eat(&TokenKind::Colon) {
                    return Ok(Some(ParamGovernor::Governor(Governor::Type(ty))));
                }
                self.pos = saved;
                return Ok(None);
            }
            if matches!(kind, TokenKind::TypeIdentifier | TokenKind::AbstractSyntax) {
                let oc = self.parse_defined_object_class()?;
                if self.eat(&TokenKind::Colon) {
                    return Ok(Some(ParamGovernor::Governor(Governor::ObjectClass(oc))));
                }
                self.pos = saved;
                return Ok(None);
            }
            if matches!(kind, TokenKind::Ident(_)) {
                // Could be a governor ident; check for COLON after optional ".ident".
                let _ = self.ident()?;
                if self.check(&TokenKind::Dot) {
                    self.bump();
                    let _ = self.ident()?;
                }
                if self.eat(&TokenKind::Colon) {
                    // It was a governor. Re-parse as definedObjectClass or ident.
                    self.pos = saved;
                    // Treat as IDENTIFIER governor (paramGovernor := IDENTIFIER).
                    let gname = self.ident()?;
                    // consume any ".ident" — but paramGovernor's IDENTIFIER alt is just one ident.
                    // The grammar's paramGovernor := governor | IDENTIFIER. governor's
                    // definedObjectClass allows (IDENTIFIER DOT)? IDENTIFIER. We already
                    // consumed optional dot above in the lookahead; redo properly:
                    self.eat(&TokenKind::Colon);
                    return Ok(Some(ParamGovernor::Ident(gname)));
                }
                self.pos = saved;
                return Ok(None);
            }
        }
        Ok(None)
    }

    // -- parameterized type/object inner -----------------------------------

    fn parse_parameterized_type_inner(&mut self) -> PResult<ParameterizedTypeInner> {
        // asnType | value | valueSet
        // valueSet starts with '{' -> elementSetSpecs
        // value starts with a value-initial token
        // asnType starts with a type keyword or IDENTIFIER
        if self.check(&TokenKind::LBrace) {
            let vs = self.parse_value_set()?;
            return Ok(ParameterizedTypeInner::ValueSet(vs));
        }
        if self.is_value_start() {
            let v = self.parse_value()?;
            return Ok(ParameterizedTypeInner::Value(v));
        }
        let ty = self.parse_asn_type()?;
        Ok(ParameterizedTypeInner::Type(ty))
    }

    fn parse_parameterized_object_inner(&mut self) -> PResult<ParameterizedObjectInner> {
        // object | objectClass | objectSet
        if self.check(&TokenKind::Class) {
            let oc = self.parse_object_class()?;
            return Ok(ParameterizedObjectInner::ObjectClass(oc));
        }
        if self.check(&TokenKind::LBrace) {
            let os = self.parse_object_set()?;
            return Ok(ParameterizedObjectInner::ObjectSet(os));
        }
        // object
        let obj = self.parse_object()?;
        Ok(ParameterizedObjectInner::Object(obj))
    }

    // -- actualParameterList / actualParameter -----------------------------

    pub(crate) fn parse_actual_parameter_list(&mut self) -> PResult<ActualParameterList> {
        self.expect(&TokenKind::LBrace)?;
        let mut params = vec![self.parse_actual_parameter()?];
        while self.eat(&TokenKind::Comma) {
            params.push(self.parse_actual_parameter()?);
        }
        self.expect(&TokenKind::RBrace)?;
        Ok(ActualParameterList { params })
    }

    fn parse_actual_parameter(&mut self) -> PResult<ActualParameter> {
        // asnType | value
        if self.is_value_start() && !self.is_builtin_type_start(self.peek().unwrap()) {
            let v = self.parse_value()?;
            return Ok(ActualParameter::Value(v));
        }
        let ty = self.parse_asn_type()?;
        Ok(ActualParameter::Type(ty))
    }

    // -- definedValue -------------------------------------------------------

    pub(crate) fn parse_defined_value(&mut self) -> PResult<DefinedValue> {
        // parameterizedValue := simpleDefinedValue (actualParameterList)?
        // simpleDefinedValue := IDENTIFIER (DOT IDENTIFIER)?
        let name = self.ident()?;
        let dot_name = if self.eat(&TokenKind::Dot) {
            Some(self.ident()?)
        } else {
            None
        };
        let params = if self.check(&TokenKind::LBrace) {
            Some(self.parse_actual_parameter_list()?)
        } else {
            None
        };
        Ok(DefinedValue {
            inner: ParameterizedValue {
                simple: SimpleDefinedValue { name, dot_name },
                params,
            },
        })
    }

    // -- signedNumber -------------------------------------------------------

    pub(crate) fn parse_signed_number(&mut self) -> PResult<SignedNumber> {
        let negative = self.eat(&TokenKind::Minus);
        let value = self.number()?;
        Ok(SignedNumber { negative, value })
    }
}
