"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class ValueRange extends base_1.Base {
    constructor(valueRange) {
        super();
        const { min, max } = valueRange;
        this.min = min;
        this.max = max;
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
        return `${this.min.toString()}..${this.max.toString()}`;
    }
}
exports.ValueRange = ValueRange;
