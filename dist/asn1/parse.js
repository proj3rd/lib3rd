"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var antlr4 = require("antlr4");
var ASN_3gppLexer_1 = require("./ASN_3gppLexer");
var ASN_3gppParser_1 = require("./ASN_3gppParser");
var modules_1 = require("./visitors/modules");
/**
 * Parse ASN.1
 * @param text Text only containing ASN.1 encoded in UTF-8
 * @returns Collection of ASN.1 module definitions. Module name is key
 */
function parse(text) {
    var chars = new antlr4.InputStream(text);
    var lexer = new ASN_3gppLexer_1.ASN_3gppLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new ASN_3gppParser_1.ASN_3gppParser(tokens);
    parser.buildParseTrees = true;
    var tree = parser.modules();
    return tree.accept(new modules_1.ModulesVisitor());
}
exports.parse = parse;
if (require.main === module) {
    var filePath = process.argv[2];
    if (!filePath) {
        throw Error('Require 1 argument, filePath');
    }
    fs_1.readFile(filePath, 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        var parseResult = parse(text);
        process.stdout.write(JSON.stringify(parseResult, null, 2));
    });
}
