"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class DefinedObjectClass extends base_1.Base {
    constructor(moduleReference, objectClassReference) {
        super();
        this.moduleReference = moduleReference;
        this.objectClassReference = objectClassReference;
    }
    depthMax() {
        // TODO
        return 0;
    }
    expand(asn1Pool, moduleName, parameterList) {
        // TODO
        return this;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        // TODO
        return [row, col];
    }
    replaceParameters(parameterMapping) {
        // TODO
    }
    setConstraint(constraints) {
        // TODO
        return this;
    }
    toString() {
        return this.moduleReference ? `${this.moduleReference}.${this.objectClassReference}` : this.objectClassReference;
    }
}
exports.DefinedObjectClass = DefinedObjectClass;
