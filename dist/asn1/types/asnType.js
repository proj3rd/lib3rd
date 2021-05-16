"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsnTypeFromObject = void 0;
const builtinType_1 = require("../types/builtinType");
const referencedType_1 = require("../types/referencedType");
const constants_1 = require("../constants");
function AsnTypeFromObject(obj) {
    try {
        return builtinType_1.BuiltinTypeFromObject(obj);
    }
    catch (e) { }
    finally { }
    try {
        return referencedType_1.ReferencedTypeFromObject(obj);
    }
    catch (e) { }
    finally { }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.AsnTypeFromObject = AsnTypeFromObject;
//# sourceMappingURL=asnType.js.map