"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const sizeConstraint_1 = require("./sizeConstraint");
const subtypeConstraint_1 = require("./subtypeConstraint");
const unions_1 = require("./unions");
class Constraint {
    constructor(constraint) {
        if (constraint instanceof sizeConstraint_1.SizeConstraint) {
            const unions = new unions_1.Unions([[constraint]]);
            this.constraintSpec = new subtypeConstraint_1.SubtypeConstraint([unions]);
        }
        else {
            this.constraintSpec = constraint;
        }
    }
    toString() {
        if (this.exceptionSpec === undefined) {
            return `(${this.constraintSpec.toString()})`;
        }
        return unimpl_1.unreach();
    }
}
exports.Constraint = Constraint;
//# sourceMappingURL=constraint.js.map