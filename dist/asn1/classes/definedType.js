"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const logging_1 = require("../../utils/logging");
const xlsx_1 = require("../format/xlsx");
const utils_1 = require("../utils");
const asnType_1 = require("./asnType");
const withComponents_1 = require("./withComponents");
class DefinedType extends asnType_1.AsnType {
    setConstraint(constraint) {
        if ('withComponents' in constraint) {
            this.withComponents = new withComponents_1.WithComponents(constraint.withComponents);
            delete constraint.withComponents;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn(`DefinedType could not handle constraint ${JSON.stringify(constraint)}`);
        }
        return this;
    }
    expand(asn1Pool /* TODO*/, moduleName, parameterList = []) {
        if (parameterList.indexOf(this.typeReference) !== -1) {
            return this;
        }
        const definition = lodash_1.cloneDeep(utils_1.findDefinition(this.typeReference, moduleName, asn1Pool));
        if (!definition) {
            return this;
        }
        const parameterMapping = {};
        if (definition.parameterList) {
            definition.parameterList.forEach((parameter, index) => {
                /**
                 * e.g. ElementTypeParam: DefinedType { typeReference: 'XXX' }
                 * New parameter scope starts
                 * This overwrites
                 */
                parameterMapping[parameter] = this.actualParameterList[index];
            });
        }
        if (!(definition instanceof DefinedType)) {
            Object.assign(definition, {
                moduleReference: this.moduleReference,
                typeReference: `${this.toString()}`,
            });
        }
        definition.replaceParameters(parameterMapping);
        definition.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        return definition;
    }
    depthMax() {
        return 0;
    }
    replaceParameters(parameterMapping) {
        if (!this.moduleReference && this.typeReference && this.typeReference in parameterMapping) {
            Object.assign(this, parameterMapping[this.typeReference]);
        }
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
