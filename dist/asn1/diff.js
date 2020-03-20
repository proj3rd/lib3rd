"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const diff_1 = require("diff");
const fs_1 = require("fs");
const path_1 = require("path");
const yargs = require("yargs");
const format_1 = require("./format");
const parse_1 = require("./parse");
const PATCH_LENGTH_WITHOUT_FILENAMES = 92;
function diff(filePathOld, filePathNew) {
    const fileNameOld = path_1.parse(filePathOld).name;
    const fileNameNew = path_1.parse(filePathNew).name;
    const asn1Old = parse_1.parse(fs_1.readFileSync(filePathOld, 'utf8'));
    const asn1New = parse_1.parse(fs_1.readFileSync(filePathNew, 'utf8'));
    const { iesOld, iesNew, iesCommon } = classifyIes(asn1Old, asn1New);
    iesCommon.forEach((ie) => {
        const formattedOld = formatSingle(ie, asn1Old);
        const formattedNew = formatSingle(ie, asn1New);
        const patch = diff_1.createTwoFilesPatch(ie.ieName, ie.ieName, formattedOld, formattedNew, `(${fileNameOld})`, `(${fileNameNew})`, {
            context: 9999,
        });
        if (patch.length - fileNameOld.length - fileNameNew.length - 3 * ie.ieName.length
            === PATCH_LENGTH_WITHOUT_FILENAMES) {
            // Ignore the empty diff:
            // Index: ie.ieName
            // ===================================================================
            // --- ie.ieName	oldHeader
            // +++ ie.ieName	newHeader
            return;
        }
        ie.diff = patch;
    });
    return { iesOld, iesNew, iesCommon };
}
exports.diff = diff;
function classifyIes(asn1Old, asn1New) {
    const iesOld = flattenIes(asn1Old);
    const iesNew = flattenIes(asn1New);
    const iesCommon = [];
    for (let indexOld = iesOld.length - 1; indexOld >= 0; indexOld--) {
        const ieOld = iesOld[indexOld];
        const indexNew = iesNew.findIndex((ieNew) => {
            return ieOld.moduleName === ieNew.moduleName && ieOld.ieName === ieNew.ieName;
        });
        if (indexNew !== -1) {
            iesCommon.push(ieOld);
            iesOld.splice(indexOld, 1);
            iesNew.splice(indexNew, 1);
        }
    }
    return { iesOld, iesNew, iesCommon };
}
function flattenIes(asn1) {
    const iesFlattened = [];
    // tslint:disable-next-line: forin
    for (const moduleName in asn1) {
        // tslint:disable-next-line: forin
        for (const ieName in asn1[moduleName].assignments) {
            iesFlattened.push({ moduleName, ieName });
        }
    }
    return iesFlattened;
}
function formatSingle(ie, asn1) {
    return format_1.formatTxt([{
            name: ie.ieName,
            definition: asn1[ie.moduleName].assignments[ie.ieName],
        }]);
}
if (require.main === module) {
    const argv = yargs
        .command('<oldFilePath> <newFilePath>', 'Compare <oldFilePath> and <newFilePath>')
        .help()
        .argv;
    const [filePathOld, filePathNew] = argv._;
    if (!filePathOld || !filePathNew) {
        throw Error('Require 2 arguments, oldFilePath and newFilePath');
    }
    diff(filePathOld, filePathNew);
}
