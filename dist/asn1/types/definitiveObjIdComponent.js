"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitiveObjIdComponentFromObject = void 0;
const constants_1 = require("../constants");
function DefinitiveObjIdComponentFromObject(obj) {
    const { name, number } = obj;
    if (typeof name !== 'string' || !name) {
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (typeof number !== 'string' || !number) {
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return { name, number };
}
exports.DefinitiveObjIdComponentFromObject = DefinitiveObjIdComponentFromObject;
//# sourceMappingURL=definitiveObjIdComponent.js.map