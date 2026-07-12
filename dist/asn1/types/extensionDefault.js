"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtensionDefaultFromObject = void 0;
const constants_1 = require("../constants");
function ExtensionDefaultFromObject(obj) {
    if (obj !== 'EXTENSIBILITY IMPLIED'
        && obj !== '') {
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return obj;
}
exports.ExtensionDefaultFromObject = ExtensionDefaultFromObject;
//# sourceMappingURL=extensionDefault.js.map