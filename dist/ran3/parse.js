"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const definition_1 = require("./classes/definition");
const definitions_1 = require("./classes/definitions");
/**
 * Regular expression for section. Following expressions are supported
 * - 9.1.2.3
 * - 9.1.2.3a
 * - A.1.2.3
 * - A.1.2.3a
 */
const reSection = /^(?<sectionNumber>[1-9A-Z]\d*?(\.[1-9]\d*?)*?\.[1-9]\w*?)\s+?(?<title>.+)$/;
//                                   ^ Head      ^ Middle       ^ Tail
/**
 * Regular expression for section. The number of '>' is equal to the depth.
 */
const reDepth = /^(?<depth>>+)/;
function normalizeHtmlText(text) {
    return text.replace(/(\s|\n)+/g, ' ').trim();
}
function matchColumns(element, columnList) {
    const trList = cheerio_1.default('tr', element);
    const trHeader = trList[0];
    const tdList = cheerio_1.default('td', trHeader);
    return (tdList.length >= columnList.length &&
        columnList.every((column, index) => {
            const normalizedText = normalizeHtmlText(cheerio_1.default(tdList[index]).text());
            return normalizedText === column;
        }));
}
function isConditionTable(element) {
    if (element.type !== 'tag' || element.name !== 'table') {
        return false;
    }
    const columnList = ['Condition', 'Explanation'];
    return matchColumns(element, columnList);
}
function isDefinitionTable(element) {
    if (element.type !== 'tag' || element.name !== 'table') {
        return false;
    }
    const columnList = [
        'IE/Group Name',
        'Presence',
        'Range',
        'IE type and reference',
        'Semantics description',
    ];
    return matchColumns(element, columnList);
}
function getDirection(element) {
    if (element.type !== 'tag' || element.name !== 'p') {
        return null;
    }
    const normalizedText = normalizeHtmlText(cheerio_1.default(element).text());
    if (!normalizedText.startsWith('Direction')) {
        return null;
    }
    // Correct incorrectly rendered rightwards arrow
    return normalizedText.replace(/\u00Ae/g, String.fromCharCode(0x2192));
}
function isParagraph(element) {
    return element.type === 'tag' && element.name === 'p';
}
function isRangeTable(element) {
    if (element.type !== 'tag' || element.name !== 'table') {
        return false;
    }
    const columnList = ['Range bound', 'Explanation'];
    return matchColumns(element, columnList);
}
function getSectionInfo(element) {
    const sectionTagList = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    if (element.type !== 'tag' || !sectionTagList.includes(element.name)) {
        return null;
    }
    const sectionText = normalizeHtmlText(cheerio_1.default(element).text());
    const matchResult = sectionText.match(reSection);
    if (!matchResult || !matchResult.groups) {
        return null;
    }
    const { sectionNumber, title } = matchResult.groups;
    return { sectionNumber, title };
}
function parseDefinitionTable(element) {
    const trList = cheerio_1.default('tr', element);
    const trBodyList = trList.slice(1);
    return trBodyList
        .map((index, trElement) => {
        const tdList = cheerio_1.default('td', trElement);
        const tdFirst = normalizeHtmlText(cheerio_1.default(tdList[0]).text());
        const name = tdFirst.replace(/^>+/, '').trim();
        const matchResult = tdFirst.match(reDepth);
        const depth = !matchResult || !matchResult.groups
            ? 0
            : matchResult.groups.depth.length;
        return {
            name,
            presence: normalizeHtmlText(cheerio_1.default(tdList[1]).text()),
            range: normalizeHtmlText(cheerio_1.default(tdList[2]).text()),
            typeAndRef: normalizeHtmlText(cheerio_1.default(tdList[3]).text()),
            description: normalizeHtmlText(cheerio_1.default(tdList[4]).text()),
            criticality: normalizeHtmlText(cheerio_1.default(tdList[5]).text()),
            assignedCriticality: normalizeHtmlText(cheerio_1.default(tdList[6]).text()),
            depth,
        };
    })
        .get();
}
function parseRangeTable(element) {
    const trList = cheerio_1.default('tr', element);
    const trBodyList = trList.slice(1);
    const rangeBoundList = trBodyList
        .map((index, trElement) => {
        const tdList = cheerio_1.default('td', trElement);
        return {
            rangeBound: cheerio_1.default(tdList[0]).text().trim(),
            explanation: cheerio_1.default(tdList[1]).text().trim(),
        };
    })
        .get();
    return rangeBoundList;
}
function parseConditionTable(element) {
    const trList = cheerio_1.default('tr', element);
    const trBodyList = trList.slice(1);
    const conditionList = trBodyList
        .map((index, trElement) => {
        const tdList = cheerio_1.default('td', trElement);
        return {
            condition: cheerio_1.default(tdList[0]).text().trim(),
            explanation: cheerio_1.default(tdList[1]).text().trim(),
        };
    })
        .get();
    return conditionList;
}
function parse(html) {
    // Break down the document into elements and put them into the list
    // The last element shall be put into the list first and popped from it last
    const elementList = cheerio_1.default(html)
        .map((index, element) => {
        return element;
    })
        .get()
        .reverse();
    const definitionList = [];
    const definition = {
        sectionNumber: '',
        name: '',
        descriptionList: [],
        direction: '',
        elementList: [],
        rangeBoundList: [],
        conditionList: [],
    };
    while (elementList.length) {
        const element = elementList.pop();
        if (element === undefined) {
            break;
        }
        // Check element matches one of given patterns
        const sectionInfo = getSectionInfo(element);
        if (sectionInfo) {
            if (definition.elementList.length) {
                definitionList.push(new definition_1.Definition(lodash_1.cloneDeep(definition)));
                definition.elementList = [];
                definition.rangeBoundList = [];
                definition.conditionList = [];
            }
            definition.descriptionList = [];
            const { sectionNumber, title: name } = sectionInfo;
            definition.sectionNumber = sectionNumber;
            definition.name = name;
            continue;
        }
        const direction = getDirection(element);
        if (direction) {
            definition.direction = direction;
            continue;
        }
        if (isDefinitionTable(element)) {
            definition.elementList = parseDefinitionTable(element);
            continue;
        }
        if (isConditionTable(element)) {
            definition.conditionList = parseConditionTable(element);
            continue;
        }
        if (isRangeTable(element)) {
            definition.rangeBoundList = parseRangeTable(element);
            continue;
        }
        if (isParagraph(element)) {
            if (!definition.elementList.length) {
                definition.descriptionList.push(cheerio_1.default(element).text());
                continue;
            }
        }
        // Otherwise, put child elements into the stack
        if (element.type === 'tag') {
            elementList.push(...element.children.reverse());
        }
    }
    return new definitions_1.Definitions(definitionList);
}
exports.parse = parse;
if (require.main === module) {
    const { argv } = process;
    const file = argv[2];
    if (file === undefined) {
        throw Error();
    }
    const html = fs_1.readFileSync(file, 'utf8');
    const parsed = parse(html);
    process.stdout.write(JSON.stringify(parsed, null, 2));
}
//# sourceMappingURL=parse.js.map