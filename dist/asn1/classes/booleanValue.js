"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BooleanValue {
    constructor(literal) {
        this.literal = literal;
        if (literal === 'TRUE' || literal === 'true') {
            this.value = true;
        }
        else if (literal === 'FALSE' || literal === 'false') {
            this.value = false;
        }
        else {
            throw Error();
        }
    }
    toString() {
        return this.literal;
    }
}
exports.BooleanValue = BooleanValue;
//# sourceMappingURL=booleanValue.js.map