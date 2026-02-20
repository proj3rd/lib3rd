"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueFromObject = void 0;
const builtinValue_1 = require("./builtinValue");
const referencedValue_1 = require("../types/referencedValue");
const constants_1 = require("../constants");
function ValueFromObject(obj) {
    try {
        return builtinValue_1.BuiltinValueFromObject(obj);
    }
    catch (e) { }
    finally { }
    try {
        return referencedValue_1.ReferencedValueFromObject(obj);
    }
    catch (e) { }
    finally { }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.ValueFromObject = ValueFromObject;
//# sourceMappingURL=value.js.map