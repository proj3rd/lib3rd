"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const xlsx_1 = require("../format/xlsx");
const utils_1 = require("../utils");
const base_1 = require("./base");
const objectClass_1 = require("./objectClass");
class ObjectSet extends base_1.Base {
    constructor(objectSetSpec) {
        super();
        this.objectSetSpec = objectSetSpec;
    }
    depthMax() {
        return this.objectSetSpec.depthMax() + 1;
    }
    expand(asn1Pool, moduleName, parameterList = []) {
        if (this.definedObjectClass) {
            const classDefinition = lodash_1.cloneDeep(utils_1.findDefinition(this.definedObjectClass.toString(), this.getModuleNameToPass(moduleName), asn1Pool));
            if (classDefinition && classDefinition instanceof objectClass_1.ObjectClass) {
                this.objectSetSpec.expand(asn1Pool, this.getModuleNameToPass(moduleName), [], classDefinition);
            }
        }
        return this;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth = 0) {
        ieElem.type = 'Object Set';
        [row, col] = xlsx_1.fillRow(ieElem, ws, row, col, depth, formatConfig, depth);
        [row, col] = this.objectSetSpec.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1);
        return [row, col];
    }
    replaceParameters() {
        // TODO
    }
    setConstraint() {
        // TODO
        return this;
    }
    toString() {
        const stringArray = [
            '{',
            this.indent(this.objectSetSpec.toString()),
            '}',
        ];
        return stringArray.join('\n');
    }
}
exports.ObjectSet = ObjectSet;
