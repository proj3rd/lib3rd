"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const spreadsheet_3 = require("../../common/spreadsheet");
const externalTypeReference_1 = require("./externalTypeReference");
const objectClassAssignment_1 = require("./objectClassAssignment");
const objectIdentifierValue_1 = require("./objectIdentifierValue");
const objectSetAssignment_1 = require("./objectSetAssignment");
const parameterizedTypeAssignment_1 = require("./parameterizedTypeAssignment");
const typeAssignment_1 = require("./typeAssignment");
const valueAssignment_1 = require("./valueAssignment");
class ParameterizedType {
    constructor(simpleDefinedType, actualParameters) {
        this.simpleDefinedType = simpleDefinedType;
        this.actualParameters = actualParameters;
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
        const parameterMappedToReference = parameterMappings.find((parameterMapping) => {
            return (parameterMapping.parameter.dummyReference ===
                this.simpleDefinedType.typeReference);
        });
        if (parameterMappedToReference === undefined) {
            // A case that TypeReference shall be expanded
            const assignment = modules.findAssignment(this.simpleDefinedType.typeReference);
            if (assignment === undefined) {
                return unimpl_1.unimpl();
            }
            else {
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
                    const parameterMappingsNew = assignment.parameters.map((parameter) => {
                        return { parameter, actualParameter: undefined };
                    });
                    // Substitute an actual parameter with the passed parameter
                    const actualParametersNew = this.actualParameters.map((actualParameter, index) => {
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
                        const parameter = parameterMappings.find((parameterMapping) => {
                            return (parameterMapping.parameter.dummyReference ===
                                objectIdComponents);
                        });
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
                        parameterMapping.actualParameter = actualParametersNew[index];
                    });
                    const expandedType = lodash_1.cloneDeep(assignment.asnType).expand(modules, parameterMappingsNew);
                    if (lodash_1.isEqual(expandedType, assignment.asnType)) {
                        return assignment.asnType;
                    }
                    return expandedType;
                }
                if (assignment instanceof valueAssignment_1.ValueAssignment) {
                    return unimpl_1.unimpl();
                }
            }
        }
        else if (parameterMappedToReference.actualParameter === undefined) {
            // A case that a type reference shall be left as-is. Do nothing.
            return this;
        }
        else {
            return unimpl_1.unimpl();
        }
        return unimpl_1.unreach();
    }
    getDepth() {
        return 0;
    }
    setConstraints(constraints) {
        if (constraints.length === 0) {
            return;
        }
        unimpl_1.unimpl();
    }
    toSpreadsheet(worksheet, row, depth) {
        row[spreadsheet_2.HEADER_REFERENCE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_3.drawBorder(worksheet, r, depth);
    }
    toString() {
        const innerString = this.actualParameters
            .map((parameter) => parameter.toString())
            .join(', ');
        return `${this.simpleDefinedType.toString()} {${innerString}}`;
    }
}
exports.ParameterizedType = ParameterizedType;
//# sourceMappingURL=parameterizedType.js.map