"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportsFromObject = void 0;
const asnSymbol_1 = require("../classes/asnSymbol");
const constants_1 = require("../constants");
function ExportsFromObject(obj) {
    if (obj === 'ALL') {
        return obj;
    }
    if (!(obj instanceof Array)) {
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    const exports = obj.map((item) => asnSymbol_1.Reference.fromObject(item));
    return exports;
}
exports.ExportsFromObject = ExportsFromObject;
//# sourceMappingURL=exports.js.map