"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldSpecFromObject = void 0;
const fixedTypeValueFieldSpec_1 = require("../classes/fixedTypeValueFieldSpec");
const typeFieldSpec_1 = require("../classes/typeFieldSpec");
const constants_1 = require("../constants");
// | VariableTypeFieldSpec // VariableTypeValue[Set]FieldSpec
// | ObjectFieldSpec // Object[Set]FieldSpec
function FieldSpecFromObject(obj) {
    const { typeFieldSpecTag } = obj;
    if (typeFieldSpecTag) {
        return typeFieldSpec_1.TypeFieldSpec.fromObject(obj);
    }
    const { fixedTypeValueFieldSpecTag } = obj;
    if (fixedTypeValueFieldSpecTag) {
        return fixedTypeValueFieldSpec_1.FixedTypeValueFieldSpec.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.FieldSpecFromObject = FieldSpecFromObject;
//# sourceMappingURL=fieldSpec.js.map