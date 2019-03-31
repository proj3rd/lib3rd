"use strict";
exports.__esModule = true;
var $ = require("cheerio");
var fs_1 = require("fs");
var msgIeTableHeader = [
    'ie/group name', 'presence', 'range', 'ie type and reference', 'semantics description',
    'criticality', 'assigned criticiality',
];
var rangeTableHeader = [
    'range bound', 'explanation',
];
var conditionTableHeader = [
    'condition', 'explanation',
];
var reDepth = /^>+/;
function parse(html) {
    var _a;
    var definitions = {};
    var sectionNumber = null;
    var sectionTitle = null;
    var description = null;
    var direction = null;
    var msgIeDefinition = null;
    var rangeDefinition = null;
    var conditionDefinition = null;
    var stack = selectorToArray($(html)).reverse();
    while (stack.length) {
        var selector = stack.pop();
        var elem = selector[0];
        if (isTagHeading(elem)) {
            if (msgIeDefinition) {
                definitions[sectionNumber] = {
                    name: sectionTitle,
                    description: description,
                    direction: direction,
                    definition: msgIeDefinition,
                    range: rangeDefinition,
                    condition: conditionDefinition
                };
            }
            (_a = sectionInformation(selector), sectionNumber = _a.sectionNumber, sectionTitle = _a.sectionTitle);
            description = null;
            direction = null;
            msgIeDefinition = null;
            rangeDefinition = null;
            conditionDefinition = null;
            continue;
        }
        if (containsDirection(selector)) {
            direction = getDirection(selector);
            continue;
        }
        if (isMsgIeTable(selector)) {
            msgIeDefinition = parseMsgIeTable(selector);
            continue;
        }
        if (isRangeTable(selector)) {
            rangeDefinition = parseRangeTable(selector);
            continue;
        }
        if (isConditionTable(selector)) {
            conditionDefinition = parseConditionTable(selector);
            continue;
        }
        if (isTagP(elem)) {
            if (!description) {
                description = normalizeWhitespace(selector.text());
            }
            continue;
        }
        stack = stackChildren(stack, selector);
    }
    return definitions;
}
exports.parse = parse;
function isTag(elem) {
    return elem.type === 'tag';
}
function isTagHeading(elem) {
    return isTag(elem) && ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(elem.name) !== -1;
}
function isTagTable(elem) {
    return isTag(elem) && elem.name === 'table';
}
function isTagP(elem) {
    return isTag(elem) && elem.name === 'p';
}
function sectionInformation(selector) {
    var sectionHeading = normalizeWhitespace(selector.text());
    var indexDelimiter = sectionHeading.indexOf(' ');
    var sectionNumber = sectionHeading.substring(0, indexDelimiter);
    var sectionTitle = sectionHeading.substring(indexDelimiter + 1);
    return { sectionNumber: sectionNumber, sectionTitle: sectionTitle };
}
function containsDirection(selector) {
    return normalizeWhitespace(selector.text()).startsWith('Direction:');
}
function getDirection(selector) {
    return normalizeWhitespace(selector.text()).replace(/^Direction:\s*/, '')
        // MS Word converts rightwards arrow to \u00AE (REGISTERED SIGN)
        .replace(/®/g, '→');
}
function doesHeaderMatch(selector, header, indexEnd) {
    var headerTds = selector.find('tr').first().children('td').slice(0, indexEnd);
    return headerTds.get().reduce(function (prev, curr, currIndex, arr) {
        return prev && (normalizeWhitespace($(curr).text()).toLowerCase() === header[currIndex]);
    }, true);
}
function isMsgIeTable(selector) {
    return isTagTable(selector[0]) && doesHeaderMatch(selector, msgIeTableHeader, 5);
}
function parseTable(selector, tableHeader) {
    var trs = selector.find('tr').slice(1);
    var definition = trs.map(function (indexTr, tr) {
        var definitionElem = {};
        $(tr).find('td').each(function (indexTd, td) {
            var key = tableHeader[indexTd];
            definitionElem[key] = normalizeWhitespace($(htmlToText($(td).html())).text());
        });
        return definitionElem;
    }).get();
    return definition;
}
function parseMsgIeTable(selector) {
    var msgIeDefinition = parseTable(selector, msgIeTableHeader);
    var depthMin = Infinity;
    msgIeDefinition.forEach(function (msgIeDefinitionElem) {
        msgIeDefinitionElem.depth = elemDepth(msgIeDefinitionElem);
        depthMin = Math.min(depthMin, msgIeDefinitionElem.depth);
    });
    msgIeDefinition.forEach(function (msgIeDefinitionElem) {
        msgIeDefinitionElem.depth -= depthMin;
    });
    return msgIeDefinition;
}
function isRangeTable(selector) {
    return isTagTable(selector[0]) && doesHeaderMatch(selector, rangeTableHeader, 2);
}
function parseRangeTable(selector) {
    return parseTable(selector, rangeTableHeader);
}
function isConditionTable(selector) {
    return isTagTable(selector[0]) && doesHeaderMatch(selector, conditionTableHeader, 2);
}
function parseConditionTable(selector) {
    return parseTable(selector, conditionTableHeader);
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
function htmlToText(html) {
    return html.replace(/<sup>\s*?(.+?)\s*?<\/sup>/g, '^($1)')
        .replace(/<sub>\s*?(.+?)\s*?<\/sub>/g, '_($1)');
}
function elemDepth(msgIeDefinitionElem) {
    var matchDepth = msgIeDefinitionElem['ie/group name'].match(reDepth);
    if (matchDepth) {
        return matchDepth[0].length;
    }
    return 0;
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
