use lib3rd::asn1::{Lexer, Parser};

fn main() {
    let src = r#"
TestModule DEFINITIONS IMPLICIT TAGS ::=
BEGIN

  MyInteger ::= INTEGER (0..255)

  MySeq ::= SEQUENCE {
    a INTEGER,
    b BOOLEAN OPTIONAL,
    c OCTET STRING DEFAULT '00'H,
    ...
  }

  MyChoice ::= CHOICE {
    x INTEGER,
    y IA5String,
    ...
  }

  MyEnum ::= ENUMERATED { red(0), green(1), blue(2) }

  myValue MySeq ::= { a 5, b TRUE }

END
"#;

    let tokens = match Lexer::new(src).tokenize() {
        Ok(t) => t,
        Err(e) => {
            eprintln!("lex error at {}:{}: {}", e.line, e.col, e.msg);
            return;
        }
    };
    println!("lexed {} tokens", tokens.len());

    let mut parser = Parser::new(tokens);
    match parser.parse_modules() {
        Ok(modules) => {
            println!("parsed {} module(s)", modules.len());
            for m in &modules {
                println!(
                    "  module {} (tag={:?}, ext={:?}), {} assignments",
                    m.name,
                    m.tag_default,
                    m.extension_default,
                    m.body.assignments.len()
                );
            }
        }
        Err(e) => {
            eprintln!("parse error at {}:{}: {}", e.line, e.col, e.msg);
        }
    }
}
