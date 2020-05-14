"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const colors = require("colors");
const lodash_1 = require("lodash");
const xlsx_1 = require("../format/xlsx");
const utils_1 = require("../utils");
const asnType_1 = require("./asnType");
const objectIdentifierValue_1 = require("./objectIdentifierValue");
class DefinedType extends asnType_1.AsnType {
    setConstraint(constraints) {
        this.constraints = constraints;
        return this;
    }
    expand(asn1Pool, moduleName, parameterList = []) {
        console.log(colors.blue(__filename), 'expand()');
        console.log(colors.yellow('Current IE'), `(type: ${this.constructor.name})`);
        console.log(JSON.stringify(this, null, 2));
        if (parameterList.findIndex((value) => lodash_1.isEqual(value, this.typeReference)) !== -1) {
            return this;
        }
        const definition = lodash_1.cloneDeep(utils_1.findDefinition(this.typeReference, this.getModuleNameToPass(moduleName), asn1Pool));
        if (!definition) {
            console.log(colors.gray('IE not found. Exit expand()'));
            return this;
        }
        const parameterMapping = [];
        if (definition instanceof asnType_1.AsnType && definition.parameterList) {
            definition.parameterList.forEach((parameter, index) => {
                /**
                 * e.g. ElementTypeParam: DefinedType { typeReference: 'XXX' }
                 * New parameter scope starts
                 * This overwrites
                 */
                const actualParameter = this.actualParameterList[index];
                parameterMapping.push({ parameter, actualParameter });
            });
        }
        if (!(definition instanceof DefinedType)) {
            Object.assign(definition, {
                moduleReference: this.moduleReference,
                typeReference: `${this.toString()}`,
            });
        }
        const definitionInstantiated = definition.replaceParameters(parameterMapping, asn1Pool, this.getModuleNameToPass(moduleName));
        return definitionInstantiated.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
    }
    depthMax() {
        return 0;
    }
    replaceParameters(parameterMapping) {
        if (!this.moduleReference && this.typeReference) {
            const mappingFound = parameterMapping.find((mapping) => mapping.parameter.dummyReference === this.typeReference);
            if (mappingFound) {
                Object.assign(this, mappingFound.actualParameter);
            }
        }
        // FIXME: Implemented in a very limited way
        if (this.actualParameterList) {
            parameterMapping.forEach((item) => {
                const { dummyReference } = item.parameter;
                const index = this.actualParameterList.findIndex((actualParameter) => {
                    if (!(actualParameter instanceof objectIdentifierValue_1.ObjectIdentifierValue)) {
                        return false;
                    }
                    return actualParameter.objIdComponentsList[0] === dummyReference;
                });
                if (index === -1) {
                    return;
                }
                const actualParameterSource = item.actualParameter;
                const actualParameterTarget = this.actualParameterList[index];
                if (actualParameterSource instanceof objectIdentifierValue_1.ObjectIdentifierValue &&
                    actualParameterTarget instanceof objectIdentifierValue_1.ObjectIdentifierValue) {
                    actualParameterTarget.objIdComponentsList = actualParameterSource.objIdComponentsList;
                }
            });
        }
        return this;
    }
    toString() {
        const actualParameterListString = this.getActualParameterListString();
        const withComponents = !this.withComponents ? '' :
            ` (WITH COMPONENTS ${this.withComponents.toString()}`;
        return `${this.moduleReference ? this.moduleReference + '.' : ''}` +
            `${this.typeReference}${actualParameterListString}${withComponents}`;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.reference = this.toString();
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth);
        return [row, col];
    }
    getActualParameterListString() {
        return !this.actualParameterList ? '' :
            ` { ${this.actualParameterList.map((item) => item.toString()).join(', ')} }`;
    }
}
exports.DefinedType = DefinedType;
