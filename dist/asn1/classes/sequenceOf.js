"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const lodash_1 = require("lodash");
const xlsx_1 = require("../format/xlsx");
const asnType_1 = require("./asnType");
const namedType_1 = require("./namedType");
class SequenceOf extends asnType_1.AsnType {
    constructor(type) {
        super();
        this.type = type;
    }
    setConstraint(constraints) {
        // If constraints (SIZE (X..Y)) of sequenceOf are already set, forbid others replacing them
        if (this.constraints && this.constraints.length) {
            return this;
        }
        this.constraints = constraints;
        return this;
    }
    expand(asn1Pool, moduleName, parameterList = []) {
        console.log(colors.blue(__filename), 'expand()');
        console.log(colors.yellow('Current IE'));
        console.log(JSON.stringify(this, null, 2));
        console.log(colors.yellow('Parameter list'));
        console.log(parameterList);
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
        return this;
    }
    toString() {
        return `SEQUENCE${this.constraintsToString()} OF ${this.expandedType ? this.expandedType.toString() : this.type.toString()}`;
    }
    toStringUnexpanded() {
        return `SEQUENCE${this.constraintsToString()} OF ${this.type.toString()}`;
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
