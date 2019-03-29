import { readFile } from 'fs';

import * as antlr4 from 'antlr4';
import { ASNLexer } from './ASNLexer';
import { ASNParser } from './ASNParser';

import { sanitize } from '../utils/text';

export function parse(text: string): any {
  const chars = new antlr4.InputStream(text);
  const lexer = new ASNLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ASNParser(tokens);
  parser.buildParseTrees = true;
}

if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    throw Error('Requires an argument, filePath');
  }
  readFile(filePath, 'utf8', (err: Error, text: string) => {
    if (err) {
      throw err;
    }
    process.stdout.write(JSON.stringify(parse(sanitize(text)), null, 2) + '\n');
  });
}
