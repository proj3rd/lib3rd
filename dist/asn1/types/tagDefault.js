"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TagDefaultFromObject = void 0;
const constants_1 = require("../constants");
function TagDefaultFromObject(obj) {
    if (typeof obj !== 'string') {
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    if (obj !== 'EXPLICIT TAGS'
        && obj !== 'IMPLICIT TAGS'
        && obj !== 'AUTOMATIC TAGS'
        && obj !== '') {
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return obj;
}
exports.TagDefaultFromObject = TagDefaultFromObject;
//# sourceMappingURL=tagDefault.js.map