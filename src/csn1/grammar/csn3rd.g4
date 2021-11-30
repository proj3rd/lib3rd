// References
// 1. 3GPP TS 24.007
// 2. http://www.csn1.info/index.html

grammar csn3rd;

definitions: definition+;

definition:
  '<' IDENTIFIER '>' '::='
  (choice | concatenation)
  ';'
;

// Precedence: concatenation > choice
choice: concatenation (('|' | '!') concatenation)+;

concatenation: concatable_expression+;

concatable_expression:
  (
    label
    | reference
    | IDENTIFIER exponent? (integer_subclassing | send_construction)?
    | choice_with_braces
    | '{' concatenation '}' truncation?
  )
  intersection? exponent_star?
;

label:
  '<' IDENTIFIER ':'
  (
    (IDENTIFIER | '<' IDENTIFIER '>') exponent? subclassing? send_construction?
    | concatenation
  )
  '>';

reference: '<' IDENTIFIER exponent_parenthesis? '>';

exponent: exponent_parenthesis | exponent_star;

exponent_parenthesis:
  '(' '*' ')'
  | '(' numeric_expression ')'
;

exponent_star:
  '**'
  | '*' (exponent_parenthesis | numeric_expression)
;

numeric_expression:
  numeric_expression '+' numeric_expression
  | numeric_expression '-' numeric_expression
  | numeric_expression '*' numeric_expression
  | '(' numeric_expression ')'
  | IDENTIFIER ('(' numeric_expression ')')?
;

subclassing: '==' IDENTIFIER;

send_construction:
  '='
  (IDENTIFIER | '<' IDENTIFIER '>')
;

integer_subclassing: ':=' IDENTIFIER;

intersection:
  '&'
  (
    IDENTIFIER exponent_parenthesis?
    | choice_with_braces
  )
;

choice_with_braces: '{' choice '}';

truncation: '//';

// FIXME: Forbid starting with a single digit
IDENTIFIER: [A-Za-z0-9]([A-Za-z0-9 _,/\-]*[A-Za-z0-9])?;

WS: [ \n\r\t] -> skip;

COMMENT: '--' ~[\r\n]+ '\n' -> skip;
