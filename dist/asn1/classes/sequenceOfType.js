"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
class SequenceOfType {
    constructor(baseType, constraint) {
        this.baseType = baseType;
        this.constraint = constraint;
    }
    expand(modules, parameterMappings) {
        const expandedBaseType = this.baseType.expand(modules, parameterMappings);
        if (expandedBaseType !== undefined) {
            this.baseType = expandedBaseType;
        }
        return this;
    }
    getDepth() {
        return this.baseType.getDepth();
    }
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        // TODO: Is it enough ?
        row[spreadsheet_1.HEADER_TYPE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        if (this.constraint === undefined) {
            return `SEQUENCE OF ${this.baseType.toString()}`;
        }
        return `SEQUENCE ${this.constraint.toString()} OF ${this.baseType.toString()}`;
    }
}
exports.SequenceOfType = SequenceOfType;
//# sourceMappingURL=sequenceOfType.js.map