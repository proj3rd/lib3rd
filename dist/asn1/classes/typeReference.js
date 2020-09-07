"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
const contentsConstraint_1 = require("./contentsConstraint");
const innerTypeConstraints_1 = require("./innerTypeConstraints");
const parameterizedTypeAssignment_1 = require("./parameterizedTypeAssignment");
const typeAssignment_1 = require("./typeAssignment");
const valueAssignment_1 = require("./valueAssignment");
class TypeReference {
    constructor(typeReference) {
        this.typeReference = typeReference;
    }
    /**
     * Expand `typeReference` property.
     * @param modules
     * @param parameterMappings
     * @returns Returns {@link AsnType} of {@link ObjectSet}.
     * {@link ObjectSet} is only applicable when expanding RAN3 ASN.1 spec.
     */
    expand(modules, parameterMappings) {
        const parameterMapping = parameterMappings.find((mapping) => mapping.parameter.dummyReference === this.typeReference);
        if (parameterMapping === undefined) {
            // A case that typeReference references another IE.
            const referencedAssignment = modules.findAssignment(this.typeReference);
            if (referencedAssignment === undefined) {
                return this;
            }
            else if (referencedAssignment instanceof typeAssignment_1.TypeAssignment) {
                const { asnType } = referencedAssignment;
                const expandedType = lodash_1.cloneDeep(asnType).expand(modules, []);
                if (lodash_1.isEqual(expandedType, asnType)) {
                    return asnType;
                }
                return expandedType;
            }
            else if (referencedAssignment instanceof parameterizedTypeAssignment_1.ParameterizedTypeAssignment) {
                return unimpl_1.unimpl();
            }
            else if (referencedAssignment instanceof valueAssignment_1.ValueAssignment) {
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
                const expandedType = lodash_1.cloneDeep(actualParameter).expand(modules, []);
                if (lodash_1.isEqual(expandedType, actualParameter)) {
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
    toSpreadsheet(worksheet, row, depth) {
        row[spreadsheet_1.HEADER_REFERENCE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.drawBorder(worksheet, r, depth);
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