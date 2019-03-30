"use strict";
exports.__esModule = true;
var $ = require("cheerio");
var fs_1 = require("fs");
function parse(html) {
    var stack = [$(html)];
    while (stack.length) {
        var elem = stack.pop();
        //  TODO
        stack = pushChildren(stack, elem);
    }
}
exports.parse = parse;
function pushChildren(stack, parent) {
    var stackChildren = [];
    parent.children().each(function (index, child) {
        stackChildren.push($(child));
    });
    return stack.concat(stackChildren.reverse());
}
if (require.main === module) {
    var filePath = process.argv[2];
    if (!filePath) {
        throw Error('Requires 1 argument, filePath');
    }
    fs_1.readFile(filePath, 'utf8', function (err, html) {
        if (err) {
            throw err;
        }
        process.stdout.write(JSON.stringify(parse(html), null, 2));
    });
}
