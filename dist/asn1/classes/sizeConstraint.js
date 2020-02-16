"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constraint_1 = require("./constraint");
class SizeConstraint extends constraint_1.Constraint {
    constructor(sizeConstraint) {
        super();
        this.sizeConstraint = sizeConstraint;
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
        return `(SIZE (${this.sizeConstraint.toString()}))`;
    }
}
exports.SizeConstraint = SizeConstraint;
