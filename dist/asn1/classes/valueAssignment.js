"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueAssignment = void 0;
const constants_1 = require("../constants");
const asnType_1 = require("../types/asnType");
const value_1 = require("../types/value");
class ValueAssignment {
    constructor(name, asnType, value) {
        this.valueAssignmentTag = true;
        this.name = name;
        this.asnType = asnType;
        this.value = value;
    }
    static fromObject(obj) {
        const { name: nameObject, asnType: asnTypeObject, value: valueObject, valueAssignmentTag } = obj;
        if (!valueAssignmentTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!nameObject || typeof nameObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const asnType = asnType_1.AsnTypeFromObject(asnTypeObject);
        const value = value_1.ValueFromObject(valueObject);
        return new ValueAssignment(nameObject, asnType, value);
    }
    // eslint-disable-next-line no-unused-vars
    expand(modules) {
        // TODO: Shall `Value::ObjectIdentifierValue` be expanded?
        return this;
    }
    getDepth() {
        if (typeof this.value === 'string') {
            return 0;
        }
        return this.value.getDepth();
    }
    toString() {
        return `${this.name}  ${this.asnType.toString()} ::= ${this.value.toString()}`;
    }
}
exports.ValueAssignment = ValueAssignment;
//# sourceMappingURL=valueAssignment.js.map