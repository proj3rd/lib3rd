"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalize = exports.parse = exports.extract = exports.renderDiff = exports.diff = void 0;
const fs_1 = require("fs");
const lodash_1 = require("lodash");
const path_1 = require("path");
const yargs_1 = __importDefault(require("yargs"));
const modules_1 = require("./classes/modules");
const valueAssignment_1 = require("./classes/valueAssignment");
const diff_1 = require("./diff");
const extractor_1 = require("./extractor");
const parser_1 = require("./parser");
var diff_2 = require("./diff");
Object.defineProperty(exports, "diff", { enumerable: true, get: function () { return diff_2.diff; } });
Object.defineProperty(exports, "renderDiff", { enumerable: true, get: function () { return diff_2.renderDiff; } });
var extractor_2 = require("./extractor");
Object.defineProperty(exports, "extract", { enumerable: true, get: function () { return extractor_2.extract; } });
var parser_2 = require("./parser");
Object.defineProperty(exports, "parse", { enumerable: true, get: function () { return parser_2.parse; } });
/**
 * Normalize ASN.1 definition with the followings:
 * - Move a tag in a separate line to inline
 * - Add a space before a tag
 * - Remove an inline comment
 * - Remove a line comment
 * - Remove a comment after a version bracket
 * - Remove a comment after a curly brace
 * - Add a space after a comman (e.g. `,...` to `, ...`)
 * - Fix an idiographic space (U+3000)
 * - Fix a replacement character (U+FFFD)
 * - Fix a no-break space (U+00A0)
 * - Trim whitespaces
 */
function normalize(asn1) {
    return asn1
        .replace(/\n\s*?(--\s*?(Need|Cond)\s+?.+?)$/gm, '$1')
        .replace(/(--\s*?(Need|Cond)\s+?.+?)$/gm, ' $1')
        .replace(/--.*?--/gm, '')
        .replace(/^\s*?--.*?$/gm, '')
        .replace(/\[\[[\t ]*?--.*?$/gm, '[[')
        .replace(/\{[\t ]*?--.*?$/gm, '{')
        .replace(/,/g, ', ')
        .replace(/\u3000/g, ' ')
        .replace(/\uFFFD/g, ' ')
        .replace(/\u00A0/g, ' ')
        .trim();
}
exports.normalize = normalize;
if (require.main === module) {
    // eslint-disable-next-line no-unused-vars
    const { argv } = yargs_1.default
        .command({
        command: 'diff <file1> <file2>',
        handler: (args) => {
            const { file1, file2 } = args;
            if (typeof file1 !== 'string' || typeof file2 !== 'string') {
                throw Error();
            }
            const { base: specOld } = path_1.parse(file1);
            const { base: specNew } = path_1.parse(file2);
            const asn1 = fs_1.readFileSync(file1, 'utf8');
            const asn2 = fs_1.readFileSync(file2, 'utf8');
            const modules1 = parser_1.parse(normalize(asn1));
            const modules2 = parser_1.parse(normalize(asn2));
            const patchList = diff_1.diff(modules1, modules2);
            const template = fs_1.readFileSync(`${__dirname}/../../resources/diff.pug`, 'utf8');
            const rendered = diff_1.renderDiff({ specOld, specNew, patchList }, template);
            const path = `diff_${specOld}_${specNew}.html`;
            fs_1.writeFileSync(path, rendered);
        },
    })
        .command({
        command: 'expand <file> <name>',
        handler: (args) => {
            const { file, name } = args;
            if (typeof file !== 'string') {
                throw Error();
            }
            if (typeof name !== 'string') {
                throw Error();
            }
            const text = fs_1.readFileSync(file, 'utf8');
            const parsed = parser_1.parse(normalize(text));
            const assignment = parsed.findAssignment(name);
            if (assignment === undefined) {
                throw Error(`${name} not found in ${file}`);
            }
            const expanded = assignment.expand(parsed);
            process.stdout.write(expanded.toString());
        },
    })
        .command({
        command: 'extract <file>',
        handler: (args) => {
            const { file } = args;
            if (typeof file !== 'string') {
                throw Error();
            }
            const { name: spec } = path_1.parse(file);
            const text = fs_1.readFileSync(file, 'utf8');
            const extracted = extractor_1.extract(text);
            const path = `${spec}.asn1`;
            fs_1.writeFileSync(path, extracted);
        },
    })
        .command({
        command: 'format <file> <name>',
        builder: (args) => args.options({
            f: {
                alias: 'format',
                choices: ['text', 'xlsx'],
                default: 'text',
            },
            e: {
                alias: 'expand',
                default: false,
                type: 'boolean',
            },
        }),
        handler: (args) => {
            const { file, name, format, expand, } = args;
            if (typeof file !== 'string'
                || typeof name !== 'string'
                || typeof format !== 'string'
                || typeof expand !== 'boolean') {
                throw Error();
            }
            const { ext } = path_1.parse(file);
            const text = fs_1.readFileSync(file, 'utf8');
            const parsed = ext === '.json' ? modules_1.Modules.fromObject(JSON.parse(text)) : parser_1.parse(text);
            const assignment = parsed.findAssignment(name);
            if (assignment === undefined) {
                throw Error(`${name} not found in ${file}`);
            }
            if (assignment instanceof valueAssignment_1.ValueAssignment
                && format === 'xlsx'
                && expand) {
                throw Error();
            }
            const assignmentNew = expand
                ? lodash_1.cloneDeep(assignment).expand(parsed)
                : assignment;
            if (format === 'text') {
                process.stdout.write(assignmentNew.toString());
            }
            else {
                if (assignmentNew instanceof valueAssignment_1.ValueAssignment) {
                    throw Error();
                }
                const wb = assignmentNew.toSpreadsheet();
                const { base } = path_1.parse(file);
                const arrToFilename = [name, base, expand ? 'expand' : ''];
                wb.xlsx.writeFile(`${arrToFilename.join('_')}.xlsx`);
            }
        },
    })
        .command({
        command: 'parse <file>',
        handler: (args) => {
            const { file } = args;
            if (typeof file !== 'string') {
                throw Error();
            }
            const text = fs_1.readFileSync(file, 'utf8');
            parser_1.parse(normalize(text));
        },
    })
        .command({
        command: 'serialize <file>',
        handler: (args) => {
            const { file } = args;
            if (typeof file !== 'string') {
                throw Error();
            }
            const text = fs_1.readFileSync(file, 'utf8');
            const parsed = parser_1.parse(normalize(text));
            fs_1.writeFileSync(`${file}.json`, JSON.stringify(parsed));
        }
    })
        .command({
        command: 'deserialize <file>',
        handler: (args) => {
            const { file } = args;
            if (typeof file !== 'string') {
                throw Error();
            }
            const serialized = fs_1.readFileSync(file, 'utf8');
            const modulesObj = JSON.parse(serialized);
            modules_1.Modules.fromObject(modulesObj);
        }
    });
}
//# sourceMappingURL=index.js.map