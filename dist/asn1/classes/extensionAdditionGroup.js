"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const xlsx_1 = require("../format/xlsx");
const base_1 = require("./base");
class ExtensionAdditionGroup extends base_1.Base {
    constructor(alternativeTypeList, versionNumber) {
        super();
        this.componentTypeList = alternativeTypeList;
        if (versionNumber !== undefined && versionNumber !== null) {
            logging_1.log.warn('ExtensionAdditionGroup could not handle versionNumber');
        }
    }
    setConstraint(constraints) {
        if (!lodash_1.isEmpty(constraints)) {
            logging_1.log.warn(`ExtensionAdditionGroup could not handle constraint ${JSON.stringify(constraints)}`);
        }
        return this;
    }
    expand(asn1Pool, moduleName, parameterList = []) {
        this.componentTypeList.forEach((item) => {
            item.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        });
        return this;
    }
    depthMax() {
        let depthMax = 0;
        this.componentTypeList.forEach((item) => {
            depthMax = Math.max(depthMax, item.depthMax() + 1);
        });
        return depthMax;
    }
    replaceParameters(paramterMapping) {
        this.componentTypeList.forEach((item) => {
            item.replaceParameters(paramterMapping);
        });
    }
    toString() {
        const itemString = [];
        this.componentTypeList.forEach((item, index) => {
            const comma = index < this.componentTypeList.length - 1 ? ',' : '';
            const tag = item.tag;
            const tagString = tag ? `    ${tag}` : '';
            itemString.push(`${this.indent(item.toString())}${comma}${tagString}`);
        });
        return [
            '[[',
            itemString.join('\n'),
            ']]',
        ].join('\n');
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.ie = '[[';
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        this.componentTypeList.forEach((componentType) => {
            [row, col] = componentType.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
        });
        ieElem.ie = ']]';
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        return [row, col];
    }
}
exports.ExtensionAdditionGroup = ExtensionAdditionGroup;
