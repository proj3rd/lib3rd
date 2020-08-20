"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("../formatter");
class SizeConstraint {
    constructor(constraint) {
        this.constraint = constraint;
    }
    toString() {
        return `SIZE ${formatter_1.getPermittedIntegerValues(this.constraint)}`;
    }
}
exports.SizeConstraint = SizeConstraint;
//# sourceMappingURL=sizeConstraint.js.map