"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinedValueFromObject = void 0;
const valueReference_1 = require("../classes/valueReference");
const constants_1 = require("../constants");
function DefinedValueFromObject(obj) {
    const { valueReferenceTag } = obj;
    if (!valueReferenceTag) {
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return valueReference_1.ValueReference.fromObject(obj);
}
exports.DefinedValueFromObject = DefinedValueFromObject;
//# sourceMappingURL=definedValue.js.map