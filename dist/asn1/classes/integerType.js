"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegerType = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("../../utils/unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const namedNumber_1 = require("../types/namedNumber");
const componentRelationConstraint_1 = require("./componentRelationConstraint");
const constraint_1 = require("./constraint");
const contentsConstraint_1 = require("./contentsConstraint");
const innerTypeConstraints_1 = require("./innerTypeConstraints");
const objectSet_1 = require("./objectSet");
const subtypeConstraint_1 = require("./subtypeConstraint");
class IntegerType {
    constructor(namedNumberList = []) {
        this.integerTypeTag = true;
        this.namedNumberList = namedNumberList;
    }
    static fromObject(obj) {
        const { constraint: constraintObj, namedNumberList: namedNumberListObj, reference: referenceObj, integerTypeTag, } = obj;
        if (!integerTypeTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const constraint = constraintObj ? constraint_1.Constraint.fromObject(constraintObj) : undefined;
        if (!(namedNumberListObj instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const namedNumberList = namedNumberListObj.map((item) => namedNumber_1.NamedNumberFromObject(item));
        if (referenceObj && typeof referenceObj !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const integerType = new IntegerType(namedNumberList);
        integerType.constraint = constraint;
        integerType.reference = referenceObj;
        return integerType;
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
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    setConstraints(constraints) {
        if (constraints.length === 0) {
            return;
        }
        if (constraints.length > 1) {
            unimpl_1.unimpl();
        }
        const constraint = constraints[0];
        const { constraintSpec } = constraint;
        if (constraintSpec instanceof contentsConstraint_1.ContentsConstraint) {
            unimpl_1.unimpl();
        }
        if (constraintSpec instanceof innerTypeConstraints_1.InnerTypeConstraints) {
            unimpl_1.unimpl();
        }
        if (constraintSpec instanceof objectSet_1.ObjectSet) {
            unimpl_1.unimpl();
        }
        if (constraintSpec instanceof componentRelationConstraint_1.ComponentRelationConstraint) {
            unimpl_1.unimpl();
        }
        if (constraintSpec instanceof subtypeConstraint_1.SubtypeConstraint) {
            this.constraint = constraint;
        }
        else {
            throw Error();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        if (this.reference && !row[spreadsheet_2.HEADER_REFERENCE]) {
            // eslint-disable-next-line no-param-reassign
            row[spreadsheet_2.HEADER_REFERENCE] = this.reference;
        }
        spreadsheet_2.appendInColumn(row, spreadsheet_2.HEADER_TYPE, this.toString());
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        const arrToString = ['INTEGER'];
        if (this.namedNumberList.length > 0) {
            const namedNumberListString = this.namedNumberList
                .map((namedNumber) => `${namedNumber.name} (${namedNumber.valueLiteral})`)
                .join(', ');
            arrToString.push(`{${namedNumberListString}}`);
        }
        if (this.constraint !== undefined) {
            const constraintString = this.constraint
                .toString()
                .replace(/(\s|\n)+/g, ' ');
            arrToString.push(constraintString);
        }
        return arrToString.join(' ');
    }
}
exports.IntegerType = IntegerType;
//# sourceMappingURL=integerType.js.map