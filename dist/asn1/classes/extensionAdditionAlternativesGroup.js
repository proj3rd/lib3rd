"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const xlsx_1 = require("../format/xlsx");
const base_1 = require("./base");
class ExtensionAdditionAlternativesGroup extends base_1.Base {
    constructor(alternativeTypeList, versionNumber) {
        super();
        this.alternativeTypeList = alternativeTypeList;
        if (versionNumber !== undefined && versionNumber !== null) {
            logging_1.log.warn('ExtensionAdditionAlternativesGroup could not handle versionNumber');
        }
    }
    setConstraint(constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn(`ExtensionAdditionAlternativesGroup could not handle constraint ${JSON.stringify(constraint)}`);
        }
        return this;
    }
    expand(asn1Pool, moduleName, parameterList = []) {
        this.alternativeTypeList.forEach((item) => {
            item.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        });
        return this;
    }
    depthMax() {
        let depthMax = 0;
        this.alternativeTypeList.forEach((item) => {
            depthMax = Math.max(depthMax, item.depthMax() + 1);
        });
        return depthMax;
    }
    replaceParameters(paramterMapping) {
        this.alternativeTypeList.forEach((item) => {
            item.replaceParameters(paramterMapping);
        });
    }
    toString() {
        return [
            '[[',
            this.alternativeTypeList.map((item) => this.indent(item.toString())).join(',\n'),
            ']]',
        ].join('\n');
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.ie = '[[';
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        this.alternativeTypeList.forEach((item) => {
            [row, col] = item.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
        });
        ieElem.ie = ']]';
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        return [row, col];
    }
}
exports.ExtensionAdditionAlternativesGroup = ExtensionAdditionAlternativesGroup;
