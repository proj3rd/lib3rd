"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const antlr4ts_1 = require("antlr4ts");
const _1 = require(".");
const ASN_3gppLexer_1 = require("./grammar/ASN_3gppLexer");
const ASN_3gppParser_1 = require("./grammar/ASN_3gppParser");
const modulesVisitor_1 = require("./visitors/modulesVisitor");
function parse(asn1) {
    const normalized = _1.normalize(asn1);
    const inputStream = new antlr4ts_1.ANTLRInputStream(normalized);
    const lexer = new ASN_3gppLexer_1.ASN_3gppLexer(inputStream);
    const tokenStream = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new ASN_3gppParser_1.ASN_3gppParser(tokenStream);
    const tree = parser.modules();
    const modulesVisitor = new modulesVisitor_1.ModulesVisitor();
    const modules = modulesVisitor.visit(tree);
    return modules;
}
exports.parse = parse;
//# sourceMappingURL=parser.js.map