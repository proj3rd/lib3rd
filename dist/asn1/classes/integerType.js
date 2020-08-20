"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
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
        return this;
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
            arrToString.push(this.constraint.toString());
        }
        return arrToString.join(' ');
    }
}
exports.IntegerType = IntegerType;
//# sourceMappingURL=integerType.js.map