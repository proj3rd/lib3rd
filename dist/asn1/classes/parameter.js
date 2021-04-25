"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = void 0;
class Parameter {
    constructor(dummyReference, paramGovernor) {
        this.dummyReference = dummyReference;
        this.paramGovernor = paramGovernor;
    }
    toString() {
        if (this.paramGovernor === undefined) {
            return this.dummyReference;
        }
        return `${this.paramGovernor.toString()}: ${this.dummyReference}`;
    }
}
exports.Parameter = Parameter;
//# sourceMappingURL=parameter.js.map