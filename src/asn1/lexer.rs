// Hand-written lexer for the grammar3rd.g4 ASN.1 grammar.
// Produces a Vec<Token> that the parser consumes.

use std::rc::Rc;

#[derive(Debug, Clone, PartialEq, Eq)]
pub enum TokenKind {
    // Single/multi-char symbols
    Assign,        // ::=
    LBrace,        // {
    RBrace,        // }
    LParan,        // (
    RParan,        // )
    LBracket,      // [
    RBracket,      // ]
    DoubleLBracket,// [[
    DoubleRBracket,// ]]
    Comma,         // ,
    SemiColon,     // ;
    Colon,         // :
    Dot,           // .
    DoubleDot,     // ..
    Ellipsis,      // ...
    Minus,         // -
    Exclam,        // !
    Ampersand,     // &
    LessThan,      // <
    GreaterThan,   // >
    Pipe,          // |
    Power,         // ^
    At,            // @
    AtDot,         // @.
    Apostrophe,    // '

    // Literals
    Number(Number),
    CString(String),
    BString(String),
    HString(String),
    Ident(Ident),
    Tag(String), // '-- ...' comment used as TAG in componentTypeLists

    // Keywords
    Definitions,
    Begin,
    End,
    Explicit,
    Implicit,
    Automatic,
    Tags,
    Extensibility,
    Implied,
    Exports,
    Imports,
    All,
    From,
    Boolean,
    True,
    False,
    TrueSmall,
    FalseSmall,
    Integer,
    Real,
    PlusInfinity,
    MinusInfinity,
    Bit,
    Octet,
    String,
    Null,
    Sequence,
    Set,
    Of,
    Choice,
    Enumerated,
    Optional,
    Default,
    Components,
    Component,
    Containing,
    Encoded,
    By,
    With,
    Present,
    Absent,
    Pattern,
    Size,
    Except,
    Union,
    Intersection,
    Includes,
    Min,
    Max,
    Class,
    Unique,
    Syntax,
    Instance,
    Universal,
    Application,
    Private,
    Embedded,
    Pdv,
    External,
    Object,
    Identifier,
    RelativeOid,
    Character,
    Constrained,
    TypeIdentifier,
    AbstractSyntax,

    // String-typed literals
    BmpString,
    GraphicString,
    Ia5String,
    Iso646String,
    NumericString,
    PrintableString,
    TeletextString,
    T61String,
    UniversalString,
    Utf8String,
    VideotexString,
    VisibleString,
    GeneralString,
}

pub type Ident = Rc<str>;
pub type Number = i64;

#[derive(Debug, Clone)]
pub struct Token {
    pub kind: TokenKind,
    pub line: usize,
    pub col: usize,
}

pub struct Lexer<'a> {
    src: &'a [u8],
    pos: usize,
    line: usize,
    col: usize,
    tokens: Vec<Token>,
}

#[derive(Debug, Clone)]
pub struct LexError {
    pub msg: String,
    pub line: usize,
    pub col: usize,
}

impl<'a> Lexer<'a> {
    pub fn new(src: &'a str) -> Self {
        Self {
            src: src.as_bytes(),
            pos: 0,
            line: 1,
            col: 1,
            tokens: Vec::new(),
        }
    }

    pub fn tokenize(mut self) -> Result<Vec<Token>, LexError> {
        while self.pos < self.src.len() {
            let c = self.src[self.pos];
            match c {
                b' ' | b'\t' | b'\n' | b'\r' | 0x0C => {
                    self.advance();
                }
                b'-' if self.peek_starts_with(b"--") => {
                    self.consume_comment()?;
                }
                b':' if self.peek_starts_with(b"::=") => {
                    self.emit(TokenKind::Assign);
                    for _ in 0..3 { self.advance(); }
                }
                b'{' if self.peek_starts_with(b"[[") => {
                    self.emit(TokenKind::DoubleLBracket);
                    for _ in 0..2 { self.advance(); }
                }
                b']' if self.peek_starts_with(b"]]") => {
                    self.emit(TokenKind::DoubleRBracket);
                    for _ in 0..2 { self.advance(); }
                }
                b'{' => { self.emit(TokenKind::LBrace); self.advance(); }
                b'}' => { self.emit(TokenKind::RBrace); self.advance(); }
                b'(' => { self.emit(TokenKind::LParan); self.advance(); }
                b')' => { self.emit(TokenKind::RParan); self.advance(); }
                b'[' => { self.emit(TokenKind::LBracket); self.advance(); }
                b']' => { self.emit(TokenKind::RBracket); self.advance(); }
                b',' => { self.emit(TokenKind::Comma); self.advance(); }
                b';' => { self.emit(TokenKind::SemiColon); self.advance(); }
                b':' => { self.emit(TokenKind::Colon); self.advance(); }
                b'.' if self.peek_starts_with(b"...") => {
                    self.emit(TokenKind::Ellipsis);
                    for _ in 0..3 { self.advance(); }
                }
                b'.' if self.peek_starts_with(b"..") => {
                    self.emit(TokenKind::DoubleDot);
                    for _ in 0..2 { self.advance(); }
                }
                b'.' => { self.emit(TokenKind::Dot); self.advance(); }
                b'-' => { self.emit(TokenKind::Minus); self.advance(); }
                b'!' => { self.emit(TokenKind::Exclam); self.advance(); }
                b'&' => { self.emit(TokenKind::Ampersand); self.advance(); }
                b'<' => { self.emit(TokenKind::LessThan); self.advance(); }
                b'>' => { self.emit(TokenKind::GreaterThan); self.advance(); }
                b'|' => { self.emit(TokenKind::Pipe); self.advance(); }
                b'^' => { self.emit(TokenKind::Power); self.advance(); }
                b'@' if self.peek_starts_with(b"@.") => {
                    self.emit(TokenKind::AtDot);
                    for _ in 0..2 { self.advance(); }
                }
                b'@' => { self.emit(TokenKind::At); self.advance(); }
                b'\'' => { self.lex_quoted()? }
                b'0'..=b'9' => { self.lex_number(); }
                _ if is_letter(c) => { self.lex_ident_or_keyword(); }
                _ => {
                    return Err(LexError {
                        msg: format!("unexpected character {:?} (0x{:02x})", c as char, c),
                        line: self.line,
                        col: self.col,
                    });
                }
            }
        }
        Ok(self.tokens)
    }

    fn advance(&mut self) {
        if self.pos < self.src.len() {
            if self.src[self.pos] == b'\n' {
                self.line += 1;
                self.col = 1;
            } else {
                self.col += 1;
            }
            self.pos += 1;
        }
    }

    fn emit(&mut self, kind: TokenKind) {
        self.tokens.push(Token { kind, line: self.line, col: self.col });
    }

    fn peek_starts_with(&self, s: &[u8]) -> bool {
        self.src[self.pos..].starts_with(s)
    }

    fn consume_comment(&mut self) -> Result<(), LexError> {
        // Grammar has two comment forms; both reduce to "skip" except
        // the TAG rule (used inside componentTypeLists) which keeps the
        // comment text. To keep things simple we always skip comments
        // here. The parser synthesizes Tag nodes as needed.
        // -- to end of line
        while self.pos < self.src.len() {
            let c = self.src[self.pos];
            self.advance();
            if c == b'\n' { break; }
        }
        Ok(())
    }

    fn lex_number(&mut self) {
        let start = self.pos;
        while self.pos < self.src.len() && self.src[self.pos].is_ascii_digit() {
            self.advance();
        }
        let text = std::str::from_utf8(&self.src[start..self.pos]).unwrap();
        let n: Number = text.parse().unwrap_or(0);
        self.emit(TokenKind::Number(n));
    }

    fn lex_quoted(&mut self) -> Result<(), LexError> {
        // '...'B  | '...'H  | "cstring"
        // We're at the opening apostrophe.
        let start_line = self.line;
        let start_col = self.col;
        self.advance(); // consume '
        let body_start = self.pos;
        while self.pos < self.src.len() {
            let c = self.src[self.pos];
            if c == b'\'' { break; }
            self.advance();
        }
        if self.pos >= self.src.len() {
            return Err(LexError {
                msg: "unterminated apostrophe-quoted literal".into(),
                line: start_line,
                col: start_col,
            });
        }
        let body = std::str::from_utf8(&self.src[body_start..self.pos])
            .unwrap()
            .to_string();
        self.advance(); // consume closing '
        // Peek at the type suffix
        if self.pos < self.src.len() {
            let suffix = self.src[self.pos];
            if suffix == b'B' || suffix == b'H' {
                self.advance();
                let kind = if suffix == b'B' {
                    TokenKind::BString(body)
                } else {
                    TokenKind::HString(body)
                };
                self.tokens.push(Token { kind, line: start_line, col: start_col });
                return Ok(());
            }
        }
        // No suffix: treat as a CString-equivalent single-quoted value.
        // (The grammar's CSTRING uses double quotes; lone apostrophe
        // literals are rare in practice. We fall back to BString body.)
        self.tokens.push(Token {
            kind: TokenKind::BString(body),
            line: start_line,
            col: start_col,
        });
        Ok(())
    }

    fn lex_ident_or_keyword(&mut self) {
        let start = self.pos;
        let c = self.src[self.pos];
        self.advance();
        // letter / java-id-digit continuation
        while self.pos < self.src.len() && (is_letter(self.src[self.pos]) || is_java_id_digit(self.src[self.pos])) {
            self.advance();
        }
        let text = std::str::from_utf8(&self.src[start..self.pos]).unwrap();
        let kind = match text {
            "DEFINITIONS" => TokenKind::Definitions,
            "BEGIN" => TokenKind::Begin,
            "END" => TokenKind::End,
            "EXPLICIT" => TokenKind::Explicit,
            "IMPLICIT" => TokenKind::Implicit,
            "AUTOMATIC" => TokenKind::Automatic,
            "TAGS" => TokenKind::Tags,
            "EXTENSIBILITY" => TokenKind::Extensibility,
            "IMPLIED" => TokenKind::Implied,
            "EXPORTS" => TokenKind::Exports,
            "IMPORTS" => TokenKind::Imports,
            "ALL" => TokenKind::All,
            "FROM" => TokenKind::From,
            "BOOLEAN" => TokenKind::Boolean,
            "TRUE" => TokenKind::True,
            "FALSE" => TokenKind::False,
            "true" => TokenKind::TrueSmall,
            "false" => TokenKind::FalseSmall,
            "INTEGER" => TokenKind::Integer,
            "REAL" => TokenKind::Real,
            "PLUS-INFINITY" => TokenKind::PlusInfinity,
            "MINUS-INFINITY" => TokenKind::MinusInfinity,
            "BIT" => TokenKind::Bit,
            "OCTET" => TokenKind::Octet,
            "STRING" => TokenKind::String,
            "NULL" => TokenKind::Null,
            "SEQUENCE" => TokenKind::Sequence,
            "SET" => TokenKind::Set,
            "OF" => TokenKind::Of,
            "CHOICE" => TokenKind::Choice,
            "ENUMERATED" => TokenKind::Enumerated,
            "OPTIONAL" => TokenKind::Optional,
            "DEFAULT" => TokenKind::Default,
            "COMPONENTS" => TokenKind::Components,
            "COMPONENT" => TokenKind::Component,
            "CONTAINING" => TokenKind::Containing,
            "ENCODED" => TokenKind::Encoded,
            "BY" => TokenKind::By,
            "WITH" => TokenKind::With,
            "PRESENT" => TokenKind::Present,
            "ABSENT" => TokenKind::Absent,
            "PATTERN" => TokenKind::Pattern,
            "SIZE" => TokenKind::Size,
            "EXCEPT" => TokenKind::Except,
            "UNION" => TokenKind::Union,
            "INTERSECTION" => TokenKind::Intersection,
            "INCLUDES" => TokenKind::Includes,
            "MIN" => TokenKind::Min,
            "MAX" => TokenKind::Max,
            "CLASS" => TokenKind::Class,
            "UNIQUE" => TokenKind::Unique,
            "SYNTAX" => TokenKind::Syntax,
            "INSTANCE" => TokenKind::Instance,
            "UNIVERSAL" => TokenKind::Universal,
            "APPLICATION" => TokenKind::Application,
            "PRIVATE" => TokenKind::Private,
            "EMBEDDED" => TokenKind::Embedded,
            "PDV" => TokenKind::Pdv,
            "EXTERNAL" => TokenKind::External,
            "OBJECT" => TokenKind::Object,
            "IDENTIFIER" => TokenKind::Identifier,
            "RELATIVE-OID" => TokenKind::RelativeOid,
            "CHARACTER" => TokenKind::Character,
            "CONSTRAINED" => TokenKind::Constrained,
            "TYPE-Identifier" => TokenKind::TypeIdentifier,
            "ABSTRACT-SYNTAX" => TokenKind::AbstractSyntax,
            "BMPString" => TokenKind::BmpString,
            "GeneralString" => TokenKind::GeneralString,
            "GraphicString" => TokenKind::GraphicString,
            "IA5String" => TokenKind::Ia5String,
            "ISO646String" => TokenKind::Iso646String,
            "NumericString" => TokenKind::NumericString,
            "PrintableString" => TokenKind::PrintableString,
            "TeletexString" => TokenKind::TeletextString,
            "T61String" => TokenKind::T61String,
            "UniversalString" => TokenKind::UniversalString,
            "UTF8String" => TokenKind::Utf8String,
            "VideotexString" => TokenKind::VideotexString,
            "VisibleString" => TokenKind::VisibleString,
            // 3GPP-friendly aliases seen in the wild
            "EXTENSION" => TokenKind::Ident(Rc::from(text)),
            _ => {
                if text.is_empty() {
                    TokenKind::Ident(Rc::from(""))
                } else {
                    TokenKind::Ident(Rc::from(text))
                }
            }
        };
        self.tokens.push(Token {
            kind,
            line: self.line,
            col: self.col,
        });
        let _ = start;
    }
}

fn is_letter(c: u8) -> bool {
    matches!(c,
        b'$' | b'-' | b'_' |
        b'A'..=b'Z' |
        b'a'..=b'z' |
        0xC0..=0xD6 |
        0xD8..=0xF6 |
        0xF8..=0xFF
    ) || (c >= 0x80) // covers the grammar's wider unicode letter ranges
}

fn is_java_id_digit(c: u8) -> bool {
    matches!(c, b'0'..=b'9') || (c >= 0x80)
}
