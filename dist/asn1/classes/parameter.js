"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class Parameter extends base_1.Base {
    constructor(paramGovernor /* TODO */, dummyReference) {
        super();
        if (!dummyReference) {
            dummyReference = paramGovernor;
            paramGovernor = undefined;
        }
        this.paramGovernor = paramGovernor;
        this.dummyReference = dummyReference;
    }
    expand(asn1Pool, moduleName) {
        // Do nothing
        return this;
    }
    depthMax() {
        return 0;
    }
    fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        // Do nothing
        return [row, col];
    }
    replaceParameters(parameterMapping) {
        // TODO
    }
    setConstraint(constraint) {
        // TODO
        return this;
    }
    toString() {
        return !this.paramGovernor ? this.dummyReference.toString() :
            `${this.paramGovernor.toString()}: ${this.dummyReference.toString()}`;
    }
}
exports.Parameter = Parameter;
