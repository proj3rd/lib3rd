"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const antlr4ts_1 = require("antlr4ts");
const ASN_3gppLexer_1 = require("./ASN_3gppLexer");
const ASN_3gppParser_1 = require("./ASN_3gppParser");
const modules_1 = require("./visitors/modules");
/**
 * Parse ASN.1
 * @param text Text only containing ASN.1 encoded in UTF-8
 * @returns Collection of ASN.1 module definitions. Module name is key
 */
function parse(text) {
    const chars = new antlr4ts_1.ANTLRInputStream(text);
    const lexer = new ASN_3gppLexer_1.ASN_3gppLexer(chars);
    const tokens = new antlr4ts_1.CommonTokenStream(lexer);
    const parser = new ASN_3gppParser_1.ASN_3gppParser(tokens);
    parser.buildParseTree = true;
    const tree = parser.modules();
    return tree.accept(new modules_1.ModulesVisitor());
}
exports.parse = parse;
if (require.main === module) {
    const filePath = process.argv[2];
    if (!filePath) {
        throw Error('Require 1 argument, filePath');
    }
    fs_1.readFile(filePath, 'utf8', (err, text) => {
        if (err) {
            throw err;
        }
        const parseResult = parse(text);
        process.stdout.write(JSON.stringify(parseResult, null, 2));
    });
}
