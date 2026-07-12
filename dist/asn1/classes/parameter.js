"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parameter = void 0;
const constants_1 = require("../constants");
const paramGovernor_1 = require("../types/paramGovernor");
class Parameter {
    constructor(dummyReference, paramGovernor) {
        this.parameterTag = true;
        this.dummyReference = dummyReference;
        this.paramGovernor = paramGovernor;
    }
    static fromObject(obj) {
        const { dummyReference, paramGovernor: paramGovernorObj, parameterTag } = obj;
        if (!parameterTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!dummyReference || typeof dummyReference !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const paramGovernor = paramGovernorObj !== undefined ? paramGovernor_1.ParamGovernorFromObject(paramGovernorObj) : undefined;
        return new Parameter(dummyReference, paramGovernor);
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