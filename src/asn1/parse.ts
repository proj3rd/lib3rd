import * as antlr4 from 'antlr4';
import { ASNLexer } from './ASNLexer';
import { ASNParser } from './ASNParser';

/**
 * Parse ASN.1
 * @param text Text only containing ASN.1 encoded in UTF-8
 * @returns ANTLR4 [`tree`](https://github.com/antlr/antlr4/blob/master/doc/javascript-target.md) object
 */
export function parse(text: string): any {
  const chars = new antlr4.InputStream(text);
  const lexer = new ASNLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ASNParser(tokens);
  parser.buildParseTrees = true;
  return parser.modules();
}
