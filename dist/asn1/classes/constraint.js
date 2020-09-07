"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
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
    /**
     * Expand `constraintSpec` property. This will mutate the object itself.
     * @param modules
     * @param parameterMappings
     */
    expand(modules, parameterMappings) {
        if (!(this.constraintSpec instanceof subtypeConstraint_1.SubtypeConstraint)) {
            return unimpl_1.unimpl();
        }
        const expandedConstraint = lodash_1.cloneDeep(this.constraintSpec).expand(modules, parameterMappings);
        if (!lodash_1.isEqual(expandedConstraint, this.constraintSpec)) {
            this.constraintSpec = expandedConstraint;
        }
        return this;
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