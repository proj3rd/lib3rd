"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Comma extends base_1.Base {
    depthMax() {
        return 0;
    }
    expand(asn1Pool, moduleName, parameterList) {
        return this;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        return [row, col];
    }
    replaceParameters(parameterMapping) {
        // Do nothing
    }
    setConstraint(constraints) {
        return this;
    }
    toString() {
        return ',';
    }
}
exports.Comma = Comma;
