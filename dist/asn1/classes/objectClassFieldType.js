"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const componentRelationConstraint_1 = require("./componentRelationConstraint");
const contentsConstraint_1 = require("./contentsConstraint");
const innerTypeConstraints_1 = require("./innerTypeConstraints");
const objectSet_1 = require("./objectSet");
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
    expand(modules, parameterMappings) {
        return unimpl_1.unimpl();
    }
    setConstraints(constraints) {
        if (constraints.length === 0) {
            return;
        }
        if (constraints.length > 1) {
            unimpl_1.unimpl();
        }
        const constraint = constraints[0];
        const { constraintSpec, exceptionSpec } = constraint;
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