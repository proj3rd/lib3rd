import { readFile } from 'fs';

import * as antlr4 from 'antlr4';
import { sanitize } from '../utils/text';
import { ASNLexer } from './ASNLexer';
import { ASNParser } from './ASNParser';
import { IModules, ModulesVisitor } from './visitors/modules';

/**
 * Parse ASN.1
 * @param text Text only containing ASN.1 encoded in UTF-8
 * @returns Collection of ASN.1 module definitions. Module name is key
 */
export function parse(text: string): IModules {
  const chars = new antlr4.InputStream(text);
  const lexer = new ASNLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ASNParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.modules();
  return tree.accept(new ModulesVisitor());
}

if (require.main === module) {
  const filePath = process.argv[2];
  if (!filePath) {
    throw Error('Require 1 argument, filePath');
  }
  readFile(filePath, 'utf8', (err: Error, text: string) => {
    if (err) {
      throw err;
    }
    process.stdout.write(JSON.stringify(parse(text), null, 2));
  });
}
