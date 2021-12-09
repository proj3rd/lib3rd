import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { normalize } from ".";
import { Definitions } from "./classes/definitions";
import { csn3rdLexer } from "./grammar/csn3rdLexer";
import { csn3rdParser } from "./grammar/csn3rdParser";
import { DefinitionsVisitor } from "./visitors/definitionsVisitor";

export function parse(csn1: string): Definitions {
  const normalized = normalize(csn1);
  const inputStream = new ANTLRInputStream(normalized);
  // eslint-disable-next-line new-cap
  const lexer = new csn3rdLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  // eslint-disable-next-line new-cap
  const parser = new csn3rdParser(tokenStream);
  const tree = parser.definitions();
  const definitionsVisitor = new DefinitionsVisitor();
  const definitions = definitionsVisitor.visit(tree);
  return definitions;
}
