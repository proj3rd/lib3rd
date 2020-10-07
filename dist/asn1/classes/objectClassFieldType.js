"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const componentRelationConstraint_1 = require("./componentRelationConstraint");
const contentsConstraint_1 = require("./contentsConstraint");
const fixedTypeValueFieldSpec_1 = require("./fixedTypeValueFieldSpec");
const innerTypeConstraints_1 = require("./innerTypeConstraints");
const objectClassAssignment_1 = require("./objectClassAssignment");
const objectSet_1 = require("./objectSet");
const objectSetAssignment_1 = require("./objectSetAssignment");
const parameterizedTypeAssignment_1 = require("./parameterizedTypeAssignment");
const typeAssignment_1 = require("./typeAssignment");
const typeFieldSpec_1 = require("./typeFieldSpec");
const typeReference_1 = require("./typeReference");
const valueAssignment_1 = require("./valueAssignment");
/**
 * X.681 clause 14
 * ```
 * definedObjectClass.primitiveFieldName[0]....primitiveFieldName[n-1] ( constraint )
 * ```
 */
class ObjectClassFieldType {
    constructor(definedObjectClass, fieldName) {
        this.definedObjectClass = definedObjectClass;
        this.fieldName = fieldName;
    }
    // eslint-disable-next-line no-unused-vars
    expand(modules, parameterMappings) {
        const assignment = modules.findAssignment(this.definedObjectClass.objectClassReference);
        if (assignment === undefined) {
            return this;
        }
        if (assignment instanceof typeAssignment_1.TypeAssignment) {
            return unimpl_1.unimpl();
        }
        if (assignment instanceof objectClassAssignment_1.ObjectClassAssignment) {
            if (this.fieldName.length !== 1) {
                return unimpl_1.unimpl();
            }
            const fieldName = this.fieldName[0];
            const { objectClass } = assignment;
            const { fieldSpecs } = objectClass;
            const fieldSpec = fieldSpecs.find((fs) => fs.fieldReference.toString() === fieldName.toString());
            if (fieldSpec === undefined) {
                return this;
            }
            if (fieldSpec instanceof typeFieldSpec_1.TypeFieldSpec) {
                return new typeReference_1.TypeReference(fieldSpec.fieldReference.toString());
            }
            if (fieldSpec instanceof fixedTypeValueFieldSpec_1.FixedTypeValueFieldSpec) {
                const expandedType = lodash_1.cloneDeep(fieldSpec.asnType).expand(modules, []);
                if (lodash_1.isEqual(expandedType, fieldSpec.asnType)) {
                    return fieldSpec.asnType;
                }
                if (expandedType instanceof objectSet_1.ObjectSet) {
                    return unimpl_1.unimpl();
                }
                return expandedType;
            }
            return unimpl_1.todo();
        }
        if (assignment instanceof objectSetAssignment_1.ObjectSetAssignment) {
            return unimpl_1.unimpl();
        }
        if (assignment instanceof parameterizedTypeAssignment_1.ParameterizedTypeAssignment) {
            return unimpl_1.unimpl();
        }
        if (assignment instanceof valueAssignment_1.ValueAssignment) {
            return unimpl_1.unimpl();
        }
        return unimpl_1.unreach();
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
        else if (constraintSpec instanceof innerTypeConstraints_1.InnerTypeConstraints) {
            unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof objectSet_1.ObjectSet) {
            unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof componentRelationConstraint_1.ComponentRelationConstraint) {
            this.constraint = constraint;
        }
        else {
            unimpl_1.unimpl();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        // eslint-disable-next-line no-param-reassign
        row[spreadsheet_2.HEADER_REFERENCE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        const fieldNamesString = this.fieldName
            .map((primitiveFieldName) => primitiveFieldName.toString())
            .join('.');
        const outerString = `${this.definedObjectClass.toString()}.${fieldNamesString}`;
        if (this.constraint === undefined) {
            return outerString;
        }
        return `${outerString} ${this.constraint.toString()}`;
    }
}
exports.ObjectClassFieldType = ObjectClassFieldType;
//# sourceMappingURL=objectClassFieldType.js.map