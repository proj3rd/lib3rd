"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const base_1 = require("./base");
const objectIdentifierValue_1 = require("./objectIdentifierValue");
class SingleValue extends base_1.Base {
    constructor(value) {
        super();
        this.value = value;
    }
    depthMax() {
        return 0;
    }
    expand(asn1Pool, moduleName, parameterList, classDefinition) {
        if (classDefinition) {
            this.instantiateObjectClass(classDefinition);
            this.value.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        }
        return this;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        // Do nothing
        return [row, col];
    }
    replaceParameters(parameterMapping) {
        // Do nothing
    }
    setConstraint(constraints) {
        // Do nothing
        return this;
    }
    toString() {
        return this.value.toString();
    }
    instantiateObjectClass(classDefinition) {
        if (this.value instanceof objectIdentifierValue_1.ObjectIdentifierValue) {
            // this.value.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList/*, classDefinition*/);
            const objectClassInstance = lodash_1.cloneDeep(classDefinition);
            objectClassInstance.withSyntaxSpec = undefined;
            objectClassInstance.moduleName = this.moduleName;
            this.value.objIdComponentsList.forEach((component, index) => {
                if (index % 2 !== 0) {
                    return;
                }
                const syntax = classDefinition.withSyntaxSpec.syntaxList.find((item) => {
                    return item.literal === component;
                });
                if (syntax === undefined) {
                    return;
                }
                const { primitiveFieldName: reference } = syntax;
                const fieldSpec = objectClassInstance.fieldSpecs.find((item) => item.reference === reference);
                if (fieldSpec === undefined) {
                    return;
                }
                const actualValue = this.value.objIdComponentsList[index + 1];
                fieldSpec.actualValue = actualValue;
            });
            this.value = objectClassInstance;
            // TODO: "Instantiate" Class
            /**
             * "ObjectIdentifierValue" {
             *   "objIdComponentsList": [
             *     "ID",          "id-MME-UE-S1AP-ID",
             *     "CRITICALITY", "reject",
             *     "TYPE",        "MME-UE-S1AP-ID",
             *     "PRESENCE",    "mandatory"
             *   ]
             * }
             */
            /**
             * Class definition (JSON-like)
             * "ObjectClass": {
             *   "fieldSpecs": [
             *     {
             *       "reference": "&referenceName",
             *       "actualValue": "string",
             *     }
             *   ],
             *   "withSyntaxSpec": {
             *     "syntaxList": [
             *       "literal": "ID",
             *       "primitiveFieldName": "&id",
             *     ]
             *   }
             * }
             */
        }
    }
}
exports.SingleValue = SingleValue;
