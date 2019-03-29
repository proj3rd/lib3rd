"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var antlr4 = require("antlr4");
var ASNLexer_1 = require("./ASNLexer");
var ASNParser_1 = require("./ASNParser");
var text_1 = require("../utils/text");
function parse(text) {
    var chars = new antlr4.InputStream(text);
    var lexer = new ASNLexer_1.ASNLexer(chars);
    var tokens = new antlr4.CommonTokenStream(lexer);
    var parser = new ASNParser_1.ASNParser(tokens);
    parser.buildParseTrees = true;
}
exports.parse = parse;
if (require.main === module) {
    var filePath = process.argv[2];
    if (!filePath) {
        throw Error('Requires an argument, filePath');
    }
    fs_1.readFile(filePath, 'utf8', function (err, text) {
        if (err) {
            throw err;
        }
        process.stdout.write(JSON.stringify(parse(text_1.sanitize(text)), null, 2) + '\n');
    });
}
