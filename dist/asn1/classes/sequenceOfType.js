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
        spreadsheet_1.appendInColumn(row, spreadsheet_1.HEADER_TYPE, this.stringPrefix());
        this.baseType.toSpreadsheet(worksheet, row, depth);
    }
    toString() {
        return `${this.stringPrefix()} ${this.baseType.toString()}`;
    }
    stringPrefix() {
        if (this.constraint === undefined) {
            return 'SEQUENCE OF';
        }
        return `SEQUENCE ${this.constraint.toString()} OF`;
    }
}
exports.SequenceOfType = SequenceOfType;
//# sourceMappingURL=sequenceOfType.js.map