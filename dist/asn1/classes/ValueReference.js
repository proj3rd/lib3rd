"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValueReference {
    constructor(valueReference) {
        this.valueReference = valueReference;
    }
    expand(modules, parameterMappings) {
        return this;
    }
    getDepth() {
        return 0;
    }
    toString() {
        return this.valueReference;
    }
}
exports.ValueReference = ValueReference;
//# sourceMappingURL=ValueReference.js.map