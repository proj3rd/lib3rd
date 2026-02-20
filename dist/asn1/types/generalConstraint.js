"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralConstraintFromObject = void 0;
const contentsConstraint_1 = require("../classes/contentsConstraint");
const innerTypeConstraints_1 = require("../classes/innerTypeConstraints");
const tableConstraint_1 = require("./tableConstraint");
function GeneralConstraintFromObject(obj) {
    const { contentsConstraintTag } = obj;
    if (contentsConstraintTag) {
        return contentsConstraint_1.ContentsConstraint.fromObject(obj);
    }
    const { innerTypeConstraintsTag } = obj;
    if (innerTypeConstraintsTag) {
        return innerTypeConstraints_1.InnerTypeConstraints.fromObject(obj);
    }
    return tableConstraint_1.TableConstraintFromObject(obj);
}
exports.GeneralConstraintFromObject = GeneralConstraintFromObject;
//# sourceMappingURL=generalConstraint.js.map