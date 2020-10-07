"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const _1 = require(".");
const grammar3rdLexer_1 = require("./grammar/grammar3rdLexer");
const grammar3rdParser_1 = require("./grammar/grammar3rdParser");
const modulesVisitor_1 = require("./visitors/modulesVisitor");
function parse(asn1) {
    const normalized = _1.normalize(asn1);
    const inputStream = new antlr4ts_1.ANTLRInputStream(normalized);
    // eslint-disable-next-line new-cap
    const lexer = new grammar3rdLexer_1.grammar3rdLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    // eslint-disable-next-line new-cap
    const parser = new grammar3rdParser_1.grammar3rdParser(tokenStream);
    const tree = parser.modules();
    const modulesVisitor = new modulesVisitor_1.ModulesVisitor();
    const modules = modulesVisitor.visit(tree);
    return modules;
}
exports.parse = parse;
//# sourceMappingURL=parser.js.map