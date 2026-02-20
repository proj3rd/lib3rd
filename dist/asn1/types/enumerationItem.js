"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumerationItemFromObject = void 0;
const extensionMarker_1 = require("../classes/extensionMarker");
const constants_1 = require("../constants");
const namedNumber_1 = require("./namedNumber");
function EnumerationItemFromObject(obj) {
    if (typeof obj === 'string') {
        return obj;
    }
    const { name, valueLiteral } = obj;
    if (typeof name === 'string' && typeof valueLiteral === 'string') {
        return namedNumber_1.NamedNumberFromObject(obj);
    }
    const { extensionMarkerTag } = obj;
    if (extensionMarkerTag) {
        return extensionMarker_1.ExtensionMarker.getInstance();
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.EnumerationItemFromObject = EnumerationItemFromObject;
//# sourceMappingURL=enumerationItem.js.map