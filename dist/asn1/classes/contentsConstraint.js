"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContentsConstraint = void 0;
const constants_1 = require("../constants");
const asnType_1 = require("../types/asnType");
const value_1 = require("../types/value");
class ContentsConstraint {
    constructor(asnType, value) {
        this.contentsConstraintTag = true;
        if (asnType === undefined && value === undefined) {
            throw Error();
        }
        this.asnType = asnType;
        this.value = value;
    }
    static fromObject(obj) {
        const { asnType: asnTypeObj, value: valueObj, contentsConstraintTag } = obj;
        if (!contentsConstraintTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const asnType = asnTypeObj ? asnType_1.AsnTypeFromObject(asnTypeObj) : undefined;
        const value = valueObj ? value_1.ValueFromObject(valueObj) : undefined;
        return new ContentsConstraint(asnType, value);
    }
    toString() {
        const arrToString = [];
        if (this.asnType !== undefined) {
            arrToString.push(`CONTAINING ${this.asnType.toString()}`);
        }
        if (this.value !== undefined) {
            arrToString.push(`ENCODED BY ${this.value.toString()}`);
        }
        return arrToString.join(' ');
    }
}
exports.ContentsConstraint = ContentsConstraint;
//# sourceMappingURL=contentsConstraint.js.map