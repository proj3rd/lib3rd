"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const assignment_1 = require("./assignment");
const contentsConstraint_1 = require("./contentsConstraint");
const innerTypeConstraints_1 = require("./innerTypeConstraints");
class TypeReference {
    constructor(typeReference) {
        this.typeReference = typeReference;
    }
    expand(modules, parameterMappings) {
        const parameterMapping = parameterMappings.find((mapping) => mapping.parameter.dummyReference === this.typeReference);
        if (parameterMapping === undefined) {
            // A case that typeReference references another IE.
            const referencedAssignment = modules.findAssignment(this.typeReference);
            if (referencedAssignment === undefined) {
                return this;
            }
            else if (referencedAssignment instanceof assignment_1.TypeAssignment) {
                const { asnType } = referencedAssignment;
                const expandedType = asnType.expand(modules, []);
                return expandedType;
            }
            else if (referencedAssignment instanceof assignment_1.ParameterizedTypeAssignment) {
                return unimpl_1.unimpl();
            }
            else if (referencedAssignment instanceof assignment_1.ValueAssignment) {
                return unimpl_1.unimpl();
            }
        }
        else if (parameterMapping.actualParameter === undefined) {
            // A case that typeReference is a dummyReference.
            return this;
        }
        else {
            // A case that typeReference shall be substituted with an actualParameter.
            const { actualParameter } = parameterMapping;
            if (actualParameter instanceof TypeReference) {
                const expandedType = actualParameter.expand(modules, []);
                if (expandedType === undefined) {
                    return actualParameter;
                }
                return expandedType;
            }
            else {
                return unimpl_1.unimpl(actualParameter.constructor.name);
            }
        }
        throw Error();
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
            return unimpl_1.unimpl();
        }
        else if (constraintSpec instanceof innerTypeConstraints_1.InnerTypeConstraints) {
            this.constraint = constraint;
        }
        else {
            return unimpl_1.unimpl();
        }
    }
    toString() {
        if (this.constraint === undefined) {
            return this.typeReference;
        }
        return `${this.typeReference} ${this.constraint.toString()}`;
    }
}
exports.TypeReference = TypeReference;
//# sourceMappingURL=typeReference.js.map