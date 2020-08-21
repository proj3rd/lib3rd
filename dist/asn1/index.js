"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const yargs_1 = __importDefault(require("yargs"));
const diff_1 = require("./diff");
const parser_1 = require("./parser");
var diff_2 = require("./diff");
exports.diff = diff_2.diff;
exports.renderDiff = diff_2.renderDiff;
var extractor_1 = require("./extractor");
exports.extract = extractor_1.extract;
var parser_2 = require("./parser");
exports.parse = parser_2.parse;
/**
 * Normalize ASN.1 definition with the followings:
 * - Move a tag in a separate line to inline
 * - Remove an inline comment
 * - Remove a line comment
 * - Trim whitespaces
 */
function normalize(asn1) {
    return asn1
        .replace(/\n\s*?(--\s*?(Need|Cond)\s+?.+?)$/gm, '$1')
        .replace(/--.*?--/gm, '')
        .replace(/^\s*?--.*?$/gm, '')
        .trim();
}
exports.normalize = normalize;
if (require.main === module) {
    const { argv } = yargs_1.default.command({
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
            const modules1 = parser_1.parse(asn1);
            const modules2 = parser_1.parse(asn2);
            const patchList = diff_1.diff(modules1, modules2);
            const rendered = diff_1.renderDiff({ specOld, specNew, patchList });
            const path = `diff_${specOld}_${specNew}.html`;
            fs_1.writeFileSync(path, rendered);
        },
    });
}
//# sourceMappingURL=index.js.map