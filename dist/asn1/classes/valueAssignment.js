"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValueAssignment {
    constructor(name, asnType, value) {
        this.name = name;
        this.asnType = asnType;
        this.value = value;
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