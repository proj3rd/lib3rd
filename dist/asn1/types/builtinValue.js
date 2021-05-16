"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuiltinValueFromObject = void 0;
const booleanValue_1 = require("../classes/booleanValue");
const integerValue_1 = require("../classes/integerValue");
const objectIdentifierValue_1 = require("../classes/objectIdentifierValue");
const constants_1 = require("../constants");
function BuiltinValueFromObject(obj) {
    const { booleanValueTag } = obj;
    if (booleanValueTag) {
        return booleanValue_1.BooleanValue.fromObject(obj);
    }
    const { integerValueTag } = obj;
    if (integerValueTag) {
        return integerValue_1.IntegerValue.fromObject(obj);
    }
    const { objectIdentifierValueTag } = obj;
    if (objectIdentifierValueTag) {
        return objectIdentifierValue_1.ObjectIdentifierValue.fromObject(obj);
    }
    if (typeof obj === 'string') {
        return obj;
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.BuiltinValueFromObject = BuiltinValueFromObject;
//# sourceMappingURL=builtinValue.js.map