import { readFile } from 'fs';

import * as antlr4 from 'antlr4';
import { ASN_3gppLexer } from './ASN_3gppLexer';
import { ASN_3gppParser } from './ASN_3gppParser';
import { IModules, ModulesVisitor } from './visitors/modules';

/**
 * Parse ASN.1
 * @param text Text only containing ASN.1 encoded in UTF-8
 * @returns Collection of ASN.1 module definitions. Module name is key
 */
export function parse(text: string): IModules {
  const chars = new antlr4.InputStream(text);
  const lexer = new ASN_3gppLexer(chars);
  const tokens = new antlr4.CommonTokenStream(lexer);
  const parser = new ASN_3gppParser(tokens);
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
    const parseResult = parse(text);
    process.stdout.write(JSON.stringify(parseResult, null, 2));
  });
}
