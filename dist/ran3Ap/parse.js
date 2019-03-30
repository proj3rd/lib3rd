"use strict";
exports.__esModule = true;
var $ = require("cheerio");
var fs_1 = require("fs");
function parse(html) {
    var sectionNumber = null;
    var sectionTitle = null;
    var stack = selectorToArray($(html)).reverse();
    while (stack.length) {
        var cheerio_1 = stack.pop();
        var elem = cheerio_1[0];
        //  TODO
        if (isTagHeading(elem)) {
            var sectionHeading = normalizeWhitespace(cheerio_1.text());
            var indexDelimiter = sectionHeading.indexOf(' ');
            sectionNumber = sectionHeading.substring(0, indexDelimiter);
            sectionTitle = sectionHeading.substring(indexDelimiter + 1);
            continue;
        }
        stack = stackChildren(stack, cheerio_1);
    }
}
exports.parse = parse;
function isTag(elem) {
    return elem.type === 'tag';
}
function isTagHeading(elem) {
    return isTag(elem) && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(elem.name) !== -1;
}
function selectorToArray(selector) {
    return selector.map(function (index, elem) {
        return $(elem);
    }).get();
}
function stackChildren(stack, parent) {
    var children = parent.children().map(function (index, child) {
        return $(child);
    }).get();
    return stack.concat(children.reverse());
}
function normalizeWhitespace(text) {
    return text.trim().replace(/\s+/g, ' ');
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
