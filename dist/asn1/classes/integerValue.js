"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ValueReference_1 = require("./ValueReference");
class IntegerValue {
    constructor(literal) {
        this.literal = literal;
        const value = +literal;
        if (Number.isNaN(value)) {
            this.value = new ValueReference_1.ValueReference(literal);
        }
        else {
            this.value = value;
        }
    }
    getDepth() {
        return 0;
    }
    toString() {
        return this.literal;
    }
}
exports.IntegerValue = IntegerValue;
//# sourceMappingURL=integerValue.js.map