"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintSpecFromObject = void 0;
const subtypeConstraint_1 = require("../classes/subtypeConstraint");
const constants_1 = require("../constants");
const generalConstraint_1 = require("./generalConstraint");
function ConstraintSpecFromObject(obj) {
    try {
        const constraintSpec = generalConstraint_1.GeneralConstraintFromObject(obj);
        return constraintSpec;
    }
    catch (e) { }
    finally { }
    const { subtypeConstraintTag } = obj;
    if (subtypeConstraintTag) {
        return subtypeConstraint_1.SubtypeConstraint.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.ConstraintSpecFromObject = ConstraintSpecFromObject;
//# sourceMappingURL=constraintSpec.js.map