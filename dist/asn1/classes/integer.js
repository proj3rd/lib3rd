"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const xlsx_1 = require("../format/xlsx");
const asnType_1 = require("./asnType");
class Integer extends asnType_1.AsnType {
    setConstraint(constraint) {
        if ('value' in constraint) {
            this.value = constraint.value;
            delete constraint.value;
            this.min = undefined;
            this.max = undefined;
        }
        if ('min' in constraint && 'max' in constraint) {
            this.min = constraint.min;
            delete constraint.min;
            this.max = constraint.max;
            delete constraint.max;
            this.value = undefined;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn(`Integer could not handle constraint ${JSON.stringify(constraint)}`);
        }
        return this;
    }
    expand(asn1Pool, moduleName) {
        return this;
    }
    depthMax() {
        return 0;
    }
    replaceParameters(paramterMapping) {
        // Do nothing
    }
    toString() {
        const valueConstraint = this.value !== undefined ? `(${this.value})` :
            this.min !== undefined && this.max !== undefined ? `(${this.min}..${this.max})` : '';
        return `INTEGER ${valueConstraint}`;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.type = this.toString();
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        this.addToConstants(this.value, constants);
        this.addToConstants(this.min, constants);
        this.addToConstants(this.max, constants);
        return [row, col];
    }
}
exports.Integer = Integer;
