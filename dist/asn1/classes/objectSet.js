"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const xlsx_1 = require("../format/xlsx");
const base_1 = require("./base");
class ObjectSet extends base_1.Base {
    constructor(objectSetSpec) {
        super();
        this.objectSetSpec = objectSetSpec;
    }
    depthMax() {
        return this.objectSetSpec.depthMax() + 1;
    }
    expand(asn1Pool, moduleName, parameterList = []) {
        this.objectSetSpec.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
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
        return ` { ${this.objectSetSpec.toString()} }`;
    }
}
exports.ObjectSet = ObjectSet;
