import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { readFileSync } from 'fs';
import { Modules } from './classes/modules';
import { ASN_3gppLexer } from './grammar/ASN_3gppLexer';
import { ASN_3gppParser } from './grammar/ASN_3gppParser';
import { ModulesVisitor } from './visitors/modulesVisitor';

export function parse(asn1: string): Modules {
  const inputStream = new ANTLRInputStream(asn1);
  const lexer = new ASN_3gppLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new ASN_3gppParser(tokenStream);
  const tree = parser.modules();
  const modulesVisitor = new ModulesVisitor();
  const modules = modulesVisitor.visit(tree);
  return modules;
}

// tslint:disable-next-line: only-arrow-functions
describe('Parse ASN.1', function () {
  this.timeout(0);

  // tslint:disable-next-line: only-arrow-functions
  it('LTE RRC (36331)', function () {
    const asn1 = readFileSync('resources/36331-g00.asn1', 'utf8');
    parse(asn1);
  });

  // tslint:disable-next-line: only-arrow-functions
  it('NR RRC (38331)', function () {
    const asn1 = readFileSync('resources/38331-g00.asn1', 'utf8');
    parse(asn1);
  });
});
