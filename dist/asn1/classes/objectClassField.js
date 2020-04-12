"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const xlsx_1 = require("../format/xlsx");
const asnType_1 = require("./asnType");
class ObjectClassField extends asnType_1.AsnType {
    constructor(moduleReference, objectClassReference, fieldName) {
        super();
        this.moduleReference = moduleReference;
        this.objectClassReference = objectClassReference;
        this.fieldName = fieldName;
    }
    setConstraint(constraints) {
        this.constraints = constraints;
        return this;
    }
    expand(asn1Pool, moduleName) {
        return this;
    }
    depthMax() {
        return 0;
    }
    replaceParameters(parameterMapping) {
        console.log(colors.blue(__filename), 'replaceParameters()');
        console.log(colors.yellow('Current IE'));
        console.log(this);
        console.log(colors.yellow('Parameter mapping:'));
        console.log(JSON.stringify(parameterMapping, null, 2));
        console.warn(colors.red(`${__filename} replaceParameters() not supported currently`));
    }
    toString() {
        const moduleReference = this.moduleReference ? `${this.moduleReference}.` : '';
        const constraint = this.constraints ? ` (${this.constraints.toString()})` : '';
        return `${moduleReference}${this.objectClassReference}.${this.fieldName}${constraint}`;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.type = this.toString();
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        return [row, col];
    }
}
exports.ObjectClassField = ObjectClassField;
