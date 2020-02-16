"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class SingleValue extends base_1.Base {
    constructor(value) {
        super();
        this.value = value;
    }
    depthMax() {
        return 0;
    }
    expand(asn1Pool, moduleName, parameterList) {
        // Do nothing
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
}
exports.SingleValue = SingleValue;
