import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { normalize } from '.';
import { Modules } from './classes/modules';
import { grammar3rdLexer } from './grammar/grammar3rdLexer';
import { grammar3rdParser } from './grammar/grammar3rdParser';
import { ModulesVisitor } from './visitors/modulesVisitor';

export function parse(asn1: string): Modules {
  const normalized = normalize(asn1);
  const inputStream = new ANTLRInputStream(normalized);
  // eslint-disable-next-line new-cap
  const lexer = new grammar3rdLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  // eslint-disable-next-line new-cap
  const parser = new grammar3rdParser(tokenStream);
  const tree = parser.modules();
  const modulesVisitor = new ModulesVisitor();
  const modules = modulesVisitor.visit(tree);
  return modules;
}
