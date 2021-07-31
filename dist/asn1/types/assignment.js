"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentFromObject = void 0;
const objectClassAssignment_1 = require("../classes/objectClassAssignment");
const objectSetAssignment_1 = require("../classes/objectSetAssignment");
const parameterizedTypeAssignment_1 = require("../classes/parameterizedTypeAssignment");
const typeAssignment_1 = require("../classes/typeAssignment");
const valueAssignment_1 = require("../classes/valueAssignment");
const constants_1 = require("../constants");
function AssignmentFromObject(obj) {
    const { typeAssignmentTag } = obj;
    if (typeAssignmentTag) {
        return typeAssignment_1.TypeAssignment.fromObject(obj);
    }
    const { objectClassAssignmentTag } = obj;
    if (objectClassAssignmentTag) {
        return objectClassAssignment_1.ObjectClassAssignment.fromObject(obj);
    }
    const { objectSetAssignmentTag } = obj;
    if (objectSetAssignmentTag) {
        return objectSetAssignment_1.ObjectSetAssignment.fromObject(obj);
    }
    const { parameterizedTypeAssignmentTag } = obj;
    if (parameterizedTypeAssignmentTag) {
        return parameterizedTypeAssignment_1.ParameterizedTypeAssignment.fromObject(obj);
    }
    const { valueAssignmentTag } = obj;
    if (valueAssignmentTag) {
        return valueAssignment_1.ValueAssignment.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.AssignmentFromObject = AssignmentFromObject;
//# sourceMappingURL=assignment.js.map