"use strict";
exports.__esModule = true;
var $ = require("cheerio");
var fs_1 = require("fs");
function parse(html) {
    var _a;
    var sectionNumber = null;
    var sectionTitle = null;
    var stack = selectorToArray($(html)).reverse();
    while (stack.length) {
        var selector = stack.pop();
        var elem = selector[0];
        //  TODO
        if (isTagHeading(elem)) {
            (_a = sectionInformation(selector), sectionNumber = _a.sectionNumber, sectionTitle = _a.sectionTitle);
            continue;
        }
        stack = stackChildren(stack, selector);
    }
}
exports.parse = parse;
function isTag(elem) {
    return elem.type === 'tag';
}
function isTagHeading(elem) {
    return isTag(elem) && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(elem.name) !== -1;
}
function sectionInformation(selector) {
    var sectionHeading = normalizeWhitespace(selector.text());
    var indexDelimiter = sectionHeading.indexOf(' ');
    var sectionNumber = sectionHeading.substring(0, indexDelimiter);
    var sectionTitle = sectionHeading.substring(indexDelimiter + 1);
    return { sectionNumber: sectionNumber, sectionTitle: sectionTitle };
}
function selectorToArray(selector) {
    return selector.map(function (index, elem) {
        return $(elem);
    }).get();
}
function stackChildren(stack, selector) {
    var children = selector.children().map(function (index, child) {
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
