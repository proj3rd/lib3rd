"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Constraint = void 0;
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const constants_1 = require("../constants");
const constraintSpec_1 = require("../types/constraintSpec");
const sizeConstraint_1 = require("./sizeConstraint");
const subtypeConstraint_1 = require("./subtypeConstraint");
const unions_1 = require("./unions");
class Constraint {
    constructor(constraint) {
        this.constraintTag = true;
        if (constraint instanceof sizeConstraint_1.SizeConstraint) {
            const unions = new unions_1.Unions([[constraint]]);
            this.constraintSpec = new subtypeConstraint_1.SubtypeConstraint([unions]);
        }
        else {
            this.constraintSpec = constraint;
        }
    }
    static fromObject(obj) {
        const { constraintSpec: constraintSpecObject, exceptionSpec, constraintTag } = obj;
        if (!constraintTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (exceptionSpec !== undefined) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const constraintSpec = constraintSpec_1.ConstraintSpecFromObject(constraintSpecObject);
        return new Constraint(constraintSpec);
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