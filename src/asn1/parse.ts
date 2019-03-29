import * as antlr4 from 'antlr4';
import { ASNLexer } from './ASNLexer';
import { ASNParser } from './ASNParser';

export function parse(text: string): any {
  const chars = new antlr4.InputStream(text);
  const lexer = new ASNLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ASNParser(tokens);
  parser.buildParseTrees = true;
  return parser.modules();
}
