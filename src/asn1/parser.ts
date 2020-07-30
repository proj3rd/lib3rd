import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { readFileSync } from 'fs';
import { normalize } from '.';
import { Modules } from './classes/modules';
import { ASN_3gppLexer } from './grammar/ASN_3gppLexer';
import { ASN_3gppParser } from './grammar/ASN_3gppParser';
import { ModulesVisitor } from './visitors/modulesVisitor';

export function parse(asn1: string): Modules {
  const normalized = normalize(asn1);
  const inputStream = new ANTLRInputStream(normalized);
  const lexer = new ASN_3gppLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ASN_3gppParser(tokenStream);
  const tree = parser.modules();
  const modulesVisitor = new ModulesVisitor();
  const modules = modulesVisitor.visit(tree);
  return modules;
}
