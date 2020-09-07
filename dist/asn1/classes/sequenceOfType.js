"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
class SequenceOfType {
    constructor(baseType, constraint) {
        this.baseType = baseType;
        this.constraint = constraint;
    }
    /**
     * Expand `baseType` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        const expandedBaseType = lodash_1.cloneDeep(this.baseType).expand(modules, parameterMappings);
        if (!lodash_1.isEqual(expandedBaseType, this.baseType)) {
            this.baseType = expandedBaseType;
        }
        if (this.constraint !== undefined) {
            const expandedConstraint = lodash_1.cloneDeep(this.constraint).expand(modules, parameterMappings);
            if (!lodash_1.isEqual(expandedConstraint, this.constraint)) {
                this.constraint = expandedConstraint;
            }
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