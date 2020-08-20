"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ValueRange {
    constructor(lower, upper) {
        this.lower = lower;
        this.upper = upper;
    }
    toString() {
        return `${this.lower.toString()}..${this.upper.toString()}`;
    }
}
exports.ValueRange = ValueRange;
//# sourceMappingURL=valueRange.js.map