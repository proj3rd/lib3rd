"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
const componentRelationConstraint_1 = require("./componentRelationConstraint");
const contentsConstraint_1 = require("./contentsConstraint");
const innerTypeConstraints_1 = require("./innerTypeConstraints");
const objectSet_1 = require("./objectSet");
const subtypeConstraint_1 = require("./subtypeConstraint");
class IntegerType {
    constructor(namedNumberList = []) {
        this.namedNumberList = namedNumberList;
    }
    expand(modules, parameterMappings) {
        if (parameterMappings.length && this.constraint !== undefined) {
            const expandedConstraint = lodash_1.cloneDeep(this.constraint).expand(modules, parameterMappings);
            if (!lodash_1.isEqual(expandedConstraint, this.constraint)) {
                this.constraint = expandedConstraint;
            }
        }
        return this;
    }
    getDepth() {
        return 0;
    }
    setConstraints(constraints) {
        if (constraints.length === 0) {
            return;
        }
        if (constraints.length > 1) {
            return unimpl_1.unimpl();
        }
        const constraint = constraints[0];
        const { constraintSpec, exceptionSpec } = constraint;
        if (constraintSpec instanceof contentsConstraint_1.ContentsConstraint) {
            return unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof innerTypeConstraints_1.InnerTypeConstraints) {
            return unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof objectSet_1.ObjectSet) {
            return unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof componentRelationConstraint_1.ComponentRelationConstraint) {
            return unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof subtypeConstraint_1.SubtypeConstraint) {
            this.constraint = constraint;
        }
        else {
            throw Error();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        row[spreadsheet_1.HEADER_TYPE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        const arrToString = ['INTEGER'];
        if (this.namedNumberList.length > 0) {
            const namedNumberListString = this.namedNumberList
                .map((namedNumber) => {
                return `${namedNumber.name} (${namedNumber.valueLiteral})`;
            })
                .join(', ');
            arrToString.push(`{${namedNumberListString}}`);
        }
        if (this.constraint !== undefined) {
            const constraintString = this.constraint.toString().replace(/(\s|\n)+/g, ' ');
            arrToString.push(constraintString);
        }
        return arrToString.join(' ');
    }
}
exports.IntegerType = IntegerType;
//# sourceMappingURL=integerType.js.map