"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementSetSpecsFromObject = void 0;
const extensionMarker_1 = require("../classes/extensionMarker");
const constants_1 = require("../constants");
const elementSetSpec_1 = require("./elementSetSpec");
function ElementSetSpecsFromObject(obj) {
    if (!(obj instanceof Array)) {
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    return obj.map((item) => {
        const { extensionMarkerTag } = item;
        if (extensionMarkerTag) {
            return extensionMarker_1.ExtensionMarker.getInstance();
        }
        return elementSetSpec_1.ElementSetSpecFromObject(item);
    });
}
exports.ElementSetSpecsFromObject = ElementSetSpecsFromObject;
//# sourceMappingURL=elementSetSpecs.js.map