"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const assignment_1 = require("./assignment");
const externalTypeReference_1 = require("./externalTypeReference");
const typeReference_1 = require("./typeReference");
class ParameterizedType {
    constructor(simpleDefinedType, actualParameters) {
        this.simpleDefinedType = simpleDefinedType;
        this.actualParameters = actualParameters;
    }
    expand(modules, parameterMappings) {
        if (this.simpleDefinedType instanceof typeReference_1.TypeReference) {
            return this.expandTypeReference(modules, parameterMappings);
        }
        else if (this.simpleDefinedType instanceof externalTypeReference_1.ExternalTypeReference) {
            return this.expandExternalTypeReference(modules, parameterMappings);
        }
        throw Error();
    }
    setConstraints(constraints) {
        if (constraints.length === 0) {
            return;
        }
        unimpl_1.unimpl();
    }
    toString() {
        const innerString = this.actualParameters
            .map((parameter) => parameter.toString())
            .join(', ');
        return `${this.simpleDefinedType.toString()} {${innerString}}`;
    }
    expandExternalTypeReference(modules, parameterMappings) {
        if (!(this.simpleDefinedType instanceof externalTypeReference_1.ExternalTypeReference)) {
            throw Error();
        }
        const { typeReference, moduleReference } = this.simpleDefinedType;
        const assignment = modules.findAssignment(typeReference, moduleReference);
        if (assignment === undefined) {
            return this;
        }
        else if (assignment instanceof assignment_1.ParameterizedTypeAssignment) {
            return unimpl_1.unimpl();
        }
        else {
            throw Error();
        }
    }
    expandTypeReference(modules, parameterMappings) {
        if (!(this.simpleDefinedType instanceof typeReference_1.TypeReference)) {
            throw Error();
        }
        const { typeReference } = this.simpleDefinedType;
        const parameterMapping = parameterMappings.find((mapping) => mapping.parameter.dummyReference === typeReference);
        if (parameterMapping === undefined) {
            // A case that typeReference references another IE.
            const assignment = modules.findAssignment(typeReference);
            if (assignment === undefined) {
                return this;
            }
            if (!(assignment instanceof assignment_1.ParameterizedTypeAssignment)) {
                throw Error();
            }
            const { asnType, parameters } = assignment;
            if (parameters.length !== this.actualParameters.length) {
                throw Error();
            }
            const parameterMappingsNew = this.actualParameters.map((actualParameter, index) => {
                return {
                    parameter: parameters[index],
                    actualParameter,
                };
            });
            const expandedType = asnType.expand(modules, parameterMappingsNew);
            return expandedType;
        }
        else if (parameterMapping.actualParameter === undefined) {
            // A case that typeReference is a dummyReference
            return this;
        }
        else {
            // A case that typeReference shall be substituted with an actualParameter.
            return unimpl_1.unimpl();
        }
    }
}
exports.ParameterizedType = ParameterizedType;
//# sourceMappingURL=parameterizedType.js.map