"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constraint_1 = require("./constraint");
class ContainingEncodedByConstraint extends constraint_1.Constraint {
    constructor(containing, encodedBy) {
        super();
        this.containing = containing;
        this.encodedBy = encodedBy;
    }
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
        const constraints = [];
        if (this.containing) {
            constraints.push(`CONTAINING ${this.containing.toString()}`);
        }
        if (this.encodedBy) {
            constraints.push(`ENCODED BY ${this.encodedBy.toString()}`);
        }
        return constraints.join(' ');
    }
}
exports.ContainingEncodedByConstraint = ContainingEncodedByConstraint;
