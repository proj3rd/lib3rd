"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const xlsx_1 = require("../format/xlsx");
const asnType_1 = require("./asnType");
class Sequence extends asnType_1.AsnType {
    constructor(items) {
        super();
        this.items = items;
    }
    setConstraint(constraints) {
        if (!lodash_1.isEmpty(constraints)) {
            logging_1.log.warn(`Sequence could not handle constraint ${JSON.stringify(constraints)}`);
        }
        return this;
    }
    expand(asn1Pool, moduleName, parameterList = []) {
        this.items.forEach((item) => {
            item.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        });
        return this;
    }
    depthMax() {
        let depthMax = 0;
        this.items.forEach((item) => {
            depthMax = Math.max(depthMax, item.depthMax() + 1);
        });
        return depthMax;
    }
    replaceParameters(parameterMapping) {
        this.items.forEach((item) => {
            item.replaceParameters(parameterMapping);
        });
    }
    toString() {
        if (!this.items.length) {
            return 'SEQUENCE {}';
        }
        const itemString = [];
        this.items.forEach((item, index) => {
            const comma = index < this.items.length - 1 ? ',' : '';
            const tag = item.tag;
            const tagString = tag ? `    ${tag}` : '';
            itemString.push(`${this.indent(item.toString())}${comma}${tagString}`);
        });
        return [
            'SEQUENCE {',
            itemString.join('\n'),
            '}',
        ].join('\n');
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.type = 'SEQUENCE';
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        this.items.forEach((item) => {
            [row, col] = item.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
        });
        return [row, col];
    }
}
exports.Sequence = Sequence;
