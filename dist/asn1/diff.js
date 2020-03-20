"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const yargs = require("yargs");
const parse_1 = require("./parse");
function diff(filePathOld, filePathNew) {
    const asn1Old = parse_1.parse(fs_1.readFileSync(filePathOld, 'utf8'));
    const asn1New = parse_1.parse(fs_1.readFileSync(filePathNew, 'utf8'));
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
    return '';
}
exports.diff = diff;
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
