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
 * Regular expression for section number. Following expressions are supported
 * - 9.1.2.3
 * - 9.1.2.3a
 * - A.1.2.3
 * - A.1.2.3a
 */
exports.reSectionNumber = /\b[1-9A-Z]\d*?(\.[1-9]\d*?)*\.[1-9]\w*?\b/;
//                         ^ Head      ^ Middle        ^ Tail
/**
 * Regular expression for section. The number of '>' is equal to the depth.
 */
const reDepth = /^(?<depth>>+)/;
/**
 * Normalize HTML text with the followings:
 * - Fix a replacement character (U+FFFD)
 */
function normalize(text) {
    return text
        .replace(/\uFFFD/g, ' ');
}
function normalizeHtmlText(text) {
    return text.replace(/(\s|\n)+/g, ' ').trim();
}
// eslint-disable-next-line no-undef
function matchColumns(element, columnList) {
    const trList = cheerio_1.default('tr', element);
    const trHeader = trList[0];
    const tdList = cheerio_1.default('td', trHeader);
    return (tdList.length >= columnList.length
        && columnList.every((column, index) => {
            const normalizedText = normalizeHtmlText(cheerio_1.default(tdList[index]).text());
            return normalizedText.toLowerCase() === column.toLowerCase();
        }));
}
// eslint-disable-next-line no-undef
function isConditionTable(element) {
    if (element.type !== 'tag' || element.name !== 'table') {
        return false;
    }
    const columnList = ['Condition', 'Explanation'];
    return matchColumns(element, columnList);
}
// eslint-disable-next-line no-undef
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
// eslint-disable-next-line no-undef
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
// eslint-disable-next-line no-undef
function isParagraph(element) {
    return element.type === 'tag' && element.name === 'p';
}
// eslint-disable-next-line no-undef
function isRangeTable(element) {
    if (element.type !== 'tag' || element.name !== 'table') {
        return false;
    }
    const columnList = ['Range bound', 'Explanation'];
    return matchColumns(element, columnList);
}
function getSectionInfo(
// eslint-disable-next-line no-undef
element) {
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
// eslint-disable-next-line no-undef
function parseDefinitionTable(element) {
    const trList = cheerio_1.default('tr', element);
    const trBodyList = trList.slice(1);
    const ieList = [];
    let depthMin = Infinity;
    trBodyList
        .each((index, trElement) => {
        const tdList = cheerio_1.default('td', trElement);
        let i = 0;
        for (; i < tdList.length; i += 1) {
            const td = normalizeHtmlText(cheerio_1.default(tdList[i]).text());
            if (td !== '') {
                break;
            }
        }
        if (i === tdList.length) {
            return;
        }
        const tdFirst = normalizeHtmlText(cheerio_1.default(tdList[i]).text());
        i += 1;
        const name = tdFirst.replace(/^>+/, '').trim();
        const matchResult = tdFirst.match(reDepth);
        const depth = !matchResult || !matchResult.groups
            ? 0
            : matchResult.groups.depth.length;
        depthMin = Math.min(depthMin, depth);
        const typeAndRef = normalizeHtmlText(cheerio_1.default(tdList[i + 2]).text());
        const [reference, type] = typeAndRef.match(exports.reSectionNumber) ? [typeAndRef, ''] : ['', typeAndRef];
        const informationElement = {
            name,
            presence: normalizeHtmlText(cheerio_1.default(tdList[i]).text()),
            range: normalizeHtmlText(cheerio_1.default(tdList[i + 1]).text()),
            reference,
            type,
            description: normalizeHtmlText(cheerio_1.default(tdList[i + 3]).text()),
            criticality: normalizeHtmlText(cheerio_1.default(tdList[i + 4]).text()),
            assignedCriticality: normalizeHtmlText(cheerio_1.default(tdList[i + 5]).text()),
            depth,
        };
        if (name === '') {
            // eslint-disable-next-line no-console
            console.log('Empty leading cell found');
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(informationElement, null, 4));
        }
        ieList.push(informationElement);
    });
    ieList.forEach((ie) => {
        // eslint-disable-next-line no-param-reassign
        ie.depth -= depthMin;
    });
    return ieList;
}
// eslint-disable-next-line no-undef
function parseRangeTable(element) {
    const trList = cheerio_1.default('tr', element);
    const trBodyList = trList.slice(1);
    const rangeBoundList = [];
    trBodyList
        .each((index, trElement) => {
        const tdList = cheerio_1.default('td', trElement);
        let i = 0;
        for (; i < tdList.length; i += 1) {
            const td = normalizeHtmlText(cheerio_1.default(tdList[i]).text());
            if (td !== '') {
                break;
            }
        }
        if (i === tdList.length) {
            return;
        }
        const rangeBound = {
            rangeBound: cheerio_1.default(tdList[i]).text().trim(),
            explanation: cheerio_1.default(tdList[i + 1]).text().trim(),
        };
        if (rangeBound.rangeBound === '') {
            // eslint-disable-next-line no-console
            console.log('Empty leading cell found');
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(rangeBound, null, 4));
        }
        rangeBoundList.push(rangeBound);
    });
    return rangeBoundList;
}
// eslint-disable-next-line no-undef
function parseConditionTable(element) {
    const trList = cheerio_1.default('tr', element);
    const trBodyList = trList.slice(1);
    const conditionList = [];
    trBodyList
        .each((index, trElement) => {
        const tdList = cheerio_1.default('td', trElement);
        let i = 0;
        for (; i < tdList.length; i += 1) {
            const td = normalizeHtmlText(cheerio_1.default(tdList[i]).text());
            if (td !== '') {
                break;
            }
        }
        if (i === tdList.length) {
            return;
        }
        const condition = {
            condition: cheerio_1.default(tdList[i]).text().trim(),
            explanation: cheerio_1.default(tdList[i + 1]).text().trim(),
        };
        if (condition.condition === '') {
            // eslint-disable-next-line no-console
            console.log('Empty leading cell found');
            // eslint-disable-next-line no-console
            console.log(JSON.stringify(condition, null, 4));
        }
        conditionList.push(condition);
    });
    return conditionList;
}
function parse(html) {
    // Break down the document into elements and put them into the list
    // The last element shall be put into the list first and popped from it last
    // eslint-disable-next-line no-undef
    const elementList = cheerio_1.default(normalize(html))
        .map((index, element) => element)
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
        const direction = getDirection(element);
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
        }
        else if (direction) {
            definition.direction = direction;
        }
        else if (isDefinitionTable(element)) {
            definition.elementList = parseDefinitionTable(element);
        }
        else if (isConditionTable(element)) {
            definition.conditionList = parseConditionTable(element);
        }
        else if (isRangeTable(element)) {
            definition.rangeBoundList = parseRangeTable(element);
        }
        else if (isParagraph(element) && !definition.elementList.length) {
            definition.descriptionList.push(cheerio_1.default(element).text());
        }
        else if (element.type === 'tag') {
            // Otherwise, put child elements into the stack
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