"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedNumberFromObject = void 0;
const constants_1 = require("../constants");
function NamedNumberFromObject(obj) {
    const { name, valueLiteral } = obj;
    if (typeof name !== 'string' || typeof valueLiteral !== 'string') {
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return { name, valueLiteral };
}
exports.NamedNumberFromObject = NamedNumberFromObject;
//# sourceMappingURL=namedNumber.js.map