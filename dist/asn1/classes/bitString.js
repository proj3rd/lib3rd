"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const xlsx_1 = require("../format/xlsx");
const asnType_1 = require("./asnType");
class BitString extends asnType_1.AsnType {
    setConstraint(constraint) {
        if ('value' in constraint) {
            this.size = constraint.value;
            delete constraint.value;
            this.sizeMin = undefined;
            this.sizeMax = undefined;
        }
        if ('min' in constraint && 'max' in constraint) {
            this.sizeMin = constraint.min;
            delete constraint.min;
            this.sizeMax = constraint.max;
            delete constraint.max;
            this.size = undefined;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn(`BitString could not handle constraint ${JSON.stringify(constraint)}`);
        }
        return this;
    }
    expand(asn1Pool /* TODO */, moduleName) {
        return this;
    }
    depthMax() {
        return 0;
    }
    replaceParameters(paramterMapping) {
        // Do nothing
    }
    toString() {
        const valueConstraint = this.size !== undefined ? `(SIZE (${this.size}))` :
            this.sizeMin !== undefined && this.sizeMax !== undefined ? `(SIZE (${this.sizeMin}..${this.sizeMax}))` : '';
        return `BIT STRING ${valueConstraint}`;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.type = this.toString();
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        this.addToConstants(this.size, constants);
        this.addToConstants(this.sizeMin, constants);
        this.addToConstants(this.sizeMax, constants);
        return [row, col];
    }
}
exports.BitString = BitString;
