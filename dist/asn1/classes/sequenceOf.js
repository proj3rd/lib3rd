"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const xlsx_1 = require("../format/xlsx");
const asnType_1 = require("./asnType");
const namedType_1 = require("./namedType");
class SequenceOf extends asnType_1.AsnType {
    constructor(type) {
        super();
        this.type = type;
    }
    setConstraint(constraint) {
        if ('value' in constraint) {
            this.size = constraint.value;
            delete constraint.value;
            this.sizeMin = null;
            this.sizeMax = null;
        }
        if ('min' in constraint && 'max' in constraint) {
            this.size = null;
            this.sizeMin = constraint.min;
            delete constraint.min;
            this.sizeMax = constraint.max;
            delete constraint.max;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn(`SequenceOf could not handle constraint ${JSON.stringify(constraint)}`);
        }
        return this;
    }
    expand(asn1Pool /* TODO */, moduleName, parameterList = []) {
        const typeToExpand = lodash_1.cloneDeep(this.type).expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        // This should always be true
        if (typeToExpand instanceof asnType_1.AsnType || typeToExpand instanceof namedType_1.NamedType) {
            this.expandedType = typeToExpand;
        }
        return this;
    }
    depthMax() {
        if (this.expandedType) {
            return this.expandedType.depthMax() + 1;
        }
        return 0;
    }
    replaceParameters(parameterMapping) {
        this.type.replaceParameters(parameterMapping);
    }
    toString() {
        const size = this.size !== null ? ` (SIZE (${this.size}))` :
            this.sizeMin !== null && this.sizeMax !== null ? ` (SIZE (${this.sizeMin}..${this.sizeMax}))` : '';
        return `SEQUENCE${size} OF ${this.expandedType ? this.expandedType.toString() : this.type.toString()}`;
    }
    toStringUnexpanded() {
        const size = this.size !== null ? ` (SIZE (${this.size}))` :
            this.sizeMin !== null && this.sizeMax !== null ? ` (SIZE (${this.sizeMin}..${this.sizeMax}))` : '';
        return `SEQUENCE${size} OF ${this.type.toString()}`;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.type = this.toStringUnexpanded();
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        this.addToConstants(this.size, constants);
        this.addToConstants(this.sizeMin, constants);
        this.addToConstants(this.sizeMax, constants);
        if (this.expandedType) {
            [row, col] = this.expandedType.fillWorksheet({ ie: this.type.toString() }, ws, row, col, depthMax, constants, formatConfig, depth + 1);
        }
        return [row, col];
    }
}
exports.SequenceOf = SequenceOf;
