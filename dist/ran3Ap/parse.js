"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
function parse(html) {
    // TODO
}
exports.parse = parse;
if (require.main === module) {
    var filePath = process.argv[2];
    if (!filePath) {
        throw Error('Requires 1 argument, filePath');
    }
    fs_1.readFile(filePath, 'utf8', function (err, html) {
        process.stdout.write(parse(html));
    });
}
