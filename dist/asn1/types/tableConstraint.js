"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableConstraintFromObject = void 0;
const componentRelationConstraint_1 = require("../classes/componentRelationConstraint");
const objectSet_1 = require("../classes/objectSet");
const constants_1 = require("../constants");
function TableConstraintFromObject(obj) {
    const { objectSetTag } = obj;
    if (objectSetTag) {
        return objectSet_1.ObjectSet.fromObject(obj);
    }
    const { componentRelationConstraintTag } = obj;
    if (componentRelationConstraintTag) {
        return componentRelationConstraint_1.ComponentRelationConstraint.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.TableConstraintFromObject = TableConstraintFromObject;
//# sourceMappingURL=tableConstraint.js.map