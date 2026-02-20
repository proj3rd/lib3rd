"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterizedType = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("../../utils/unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const constants_1 = require("../constants");
const spreadsheet_2 = require("../formatter/spreadsheet");
const actualParamter_1 = require("../types/actualParamter");
const externalTypeReference_1 = require("./externalTypeReference");
const objectClassAssignment_1 = require("./objectClassAssignment");
const objectIdentifierValue_1 = require("./objectIdentifierValue");
const objectSetAssignment_1 = require("./objectSetAssignment");
const parameterizedTypeAssignment_1 = require("./parameterizedTypeAssignment");
const typeAssignment_1 = require("./typeAssignment");
const typeReference_1 = require("./typeReference");
const valueAssignment_1 = require("./valueAssignment");
const unimpl_2 = require("../../utils/unimpl");
class ParameterizedType {
    constructor(simpleDefinedType, actualParameters) {
        this.paramterizedTypeTag = true;
        this.simpleDefinedType = simpleDefinedType;
        this.actualParameters = actualParameters;
    }
    static fromObject(obj) {
        const { simpleDefinedType: simpleDefinedTypeObj, actualParameters: actualParametersObj, reference: referenceObj, paramterizedTypeTag, } = obj;
        if (!paramterizedTypeTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const { typeReferenceTag } = simpleDefinedTypeObj;
        const { externalTypeReferenceTag } = simpleDefinedTypeObj;
        if (typeReferenceTag === externalTypeReferenceTag) { // (true, true) OR (undefined, undefined)
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const simpleDefinedType = typeReferenceTag ? typeReference_1.TypeReference.fromObject(simpleDefinedTypeObj) : externalTypeReference_1.ExternalTypeReference.fromObject(simpleDefinedTypeObj);
        if (!(actualParametersObj instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const actualParameters = actualParametersObj.map((item) => actualParamter_1.ActualParameterFromObject(item));
        if (referenceObj && typeof referenceObj !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const parameterizedType = new ParameterizedType(simpleDefinedType, actualParameters);
        parameterizedType.reference = referenceObj;
        return parameterizedType;
    }
    /**
     * Expand the parameterized type.
     * @param modules
     * @param parameterMappings
     * @returns Returns {@link AsnType} of {@link ObjectSet}.
     * {@link ObjectSet} is only applicable when expanding RAN3 ASN.1 spec.
     */
    expand(modules, parameterMappings) {
        if (this.simpleDefinedType instanceof externalTypeReference_1.ExternalTypeReference) {
            return unimpl_1.unimpl();
        }
        const parameterMappedToReference = parameterMappings.find((parameterMapping) => (parameterMapping.parameter.dummyReference
            === this.simpleDefinedType.typeReference));
        if (parameterMappedToReference === undefined) {
            // A case that TypeReference shall be expanded
            const assignment = modules.findAssignment(this.simpleDefinedType.typeReference);
            if (assignment === undefined) {
                return this;
            }
            if (assignment instanceof typeAssignment_1.TypeAssignment) {
                return unimpl_1.unimpl();
            }
            if (assignment instanceof objectClassAssignment_1.ObjectClassAssignment) {
                return unimpl_1.unimpl();
            }
            if (assignment instanceof objectSetAssignment_1.ObjectSetAssignment) {
                return unimpl_1.unimpl();
            }
            if (assignment instanceof parameterizedTypeAssignment_1.ParameterizedTypeAssignment) {
                // Prepare the base of parameter mapping
                const parameterMappingsNew = assignment.parameters.map((parameter) => ({ parameter, actualParameter: undefined }));
                // Substitute an actual parameter with the passed parameter
                const actualParametersNew = this.actualParameters.map((actualParameter) => {
                    if (!(actualParameter instanceof objectIdentifierValue_1.ObjectIdentifierValue)) {
                        return actualParameter;
                    }
                    const { objectIdComponentsList } = actualParameter;
                    if (objectIdComponentsList.length !== 1) {
                        return unimpl_1.unimpl();
                    }
                    const objectIdComponents = objectIdComponentsList[0];
                    if (typeof objectIdComponents !== 'string') {
                        return unimpl_1.unimpl();
                    }
                    const parameter = parameterMappings.find((parameterMapping) => (parameterMapping.parameter.dummyReference
                        === objectIdComponents));
                    if (parameter === undefined) {
                        return objectIdComponents;
                    }
                    if (parameter.actualParameter === undefined) {
                        return actualParameter;
                    }
                    return parameter.actualParameter;
                });
                // Map each parameter and actual parameter
                if (parameterMappingsNew.length !== actualParametersNew.length) {
                    return unimpl_1.unimpl();
                }
                parameterMappingsNew.forEach((parameterMapping, index) => {
                    // eslint-disable-next-line no-param-reassign
                    parameterMapping.actualParameter = actualParametersNew[index];
                });
                const asnType = lodash_1.cloneDeep(assignment.asnType);
                const expandedType = lodash_1.cloneDeep(lodash_1.cloneDeep(asnType).expand(modules, parameterMappingsNew));
                if (lodash_1.isEqual(expandedType, asnType)) {
                    asnType.reference = this.toStringHelper(actualParametersNew);
                    return asnType;
                }
                expandedType.reference = this.toStringHelper(actualParametersNew);
                return expandedType;
            }
            if (assignment instanceof valueAssignment_1.ValueAssignment) {
                return unimpl_1.unimpl();
            }
        }
        else if (parameterMappedToReference.actualParameter === undefined) {
            // A case that a type reference shall be left as-is. Do nothing.
            return this;
        }
        else {
            return unimpl_1.unimpl();
        }
        return unimpl_2.unreach();
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    // eslint-disable-next-line class-methods-use-this
    setConstraints(constraints) {
        if (constraints.length === 0) {
            return;
        }
        unimpl_1.unimpl();
    }
    toSpreadsheet(worksheet, row, depth) {
        if (this.reference && !row[spreadsheet_2.HEADER_REFERENCE]) {
            // eslint-disable-next-line no-param-reassign
            row[spreadsheet_2.HEADER_REFERENCE] = this.reference;
        }
        // eslint-disable-next-line no-param-reassign
        row[spreadsheet_2.HEADER_REFERENCE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        return this.toStringHelper(this.actualParameters);
    }
    toStringHelper(actualParameters) {
        const innerString = actualParameters
            .map((parameter) => parameter.toString())
            .join(', ');
        return `${this.simpleDefinedType.toString()} {${innerString}}`;
    }
}
exports.ParameterizedType = ParameterizedType;
//# sourceMappingURL=parameterizedType.js.map