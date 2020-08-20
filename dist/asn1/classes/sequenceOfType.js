"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
class SequenceOfType {
    constructor(baseType, constraint) {
        this.baseType = baseType;
        this.constraint = constraint;
    }
    expand(modules, parameterMappings) {
        const expandedBaseType = this.baseType.expand(modules, parameterMappings);
        if (expandedBaseType !== undefined) {
            this.baseType = expandedBaseType;
        }
        return this;
    }
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toString() {
        if (this.constraint === undefined) {
            return `SEQUENCE OF ${this.baseType.toString()}`;
        }
        return `SEQUENCE ${this.constraint.toString()} OF ${this.baseType.toString()}`;
    }
}
exports.SequenceOfType = SequenceOfType;
//# sourceMappingURL=sequenceOfType.js.map