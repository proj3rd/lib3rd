"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeConstraintsComponentFromObject = void 0;
const componentPresence_1 = require("../classes/componentPresence");
const extensionMarker_1 = require("../classes/extensionMarker");
const constants_1 = require("../constants");
function TypeConstraintsComponentFromObject(obj) {
    const { componentPresenceTag } = obj;
    if (componentPresenceTag) {
        return componentPresence_1.ComponentPresence.fromObject(obj);
    }
    const { extensionMarkerTag } = obj;
    if (extensionMarkerTag) {
        return extensionMarker_1.ExtensionMarker.getInstance();
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.TypeConstraintsComponentFromObject = TypeConstraintsComponentFromObject;
//# sourceMappingURL=typeConstraintsComponent.js.map