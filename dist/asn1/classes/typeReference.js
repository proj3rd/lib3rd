"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeReference = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const constraint_1 = require("./constraint");
const contentsConstraint_1 = require("./contentsConstraint");
const innerTypeConstraints_1 = require("./innerTypeConstraints");
const parameterizedTypeAssignment_1 = require("./parameterizedTypeAssignment");
const typeAssignment_1 = require("./typeAssignment");
const valueAssignment_1 = require("./valueAssignment");
class TypeReference {
    constructor(typeReference) {
        this.typeReferenceTag = true;
        this.typeReference = typeReference;
    }
    static fromObject(obj) {
        const { typeReference: typeReferenceObject, constraint: constraintObj, typeReferenceTag } = obj;
        if (!typeReferenceTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!typeReferenceObject || typeof typeReferenceObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const constraint = constraintObj ? constraint_1.Constraint.fromObject(constraintObj) : undefined;
        const typeReference = new TypeReference(typeReferenceObject);
        typeReference.constraint = constraint;
        return typeReference;
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
            if (referencedAssignment instanceof typeAssignment_1.TypeAssignment) {
                const asnType = lodash_1.cloneDeep(referencedAssignment.asnType);
                const expandedType = lodash_1.cloneDeep(lodash_1.cloneDeep(asnType).expand(modules, []));
                if (lodash_1.isEqual(expandedType, asnType)) {
                    asnType.reference = this.toString();
                    return asnType;
                }
                expandedType.reference = this.toString();
                return expandedType;
            }
            if (referencedAssignment instanceof parameterizedTypeAssignment_1.ParameterizedTypeAssignment) {
                return unimpl_1.unimpl();
            }
            if (referencedAssignment instanceof valueAssignment_1.ValueAssignment) {
                return unimpl_1.unimpl();
            }
        }
        else if (parameterMapping.actualParameter === undefined) {
            // A case that typeReference is a dummyReference.
            return this;
        }
        else {
            // A case that typeReference shall be substituted with an actualParameter.
            const actualParameter = lodash_1.cloneDeep(parameterMapping.actualParameter);
            if (actualParameter instanceof TypeReference) {
                const expandedType = lodash_1.cloneDeep(lodash_1.cloneDeep(actualParameter).expand(modules, []));
                if (lodash_1.isEqual(expandedType, actualParameter)) {
                    actualParameter.reference = this.toString();
                    return actualParameter;
                }
                expandedType.reference = this.toString();
                return expandedType;
            }
            return unimpl_1.unimpl(actualParameter.constructor.name);
        }
        throw Error();
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
            this.constraint = constraint;
        }
        else {
            unimpl_1.unimpl();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        row[spreadsheet_2.HEADER_REFERENCE] = this.reference || this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
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