"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootChoiceComponentsFromObject = void 0;
const extensionAdditionAlternativeGroup_1 = require("../classes/extensionAdditionAlternativeGroup");
const extensionMarker_1 = require("../classes/extensionMarker");
const namedType_1 = require("../classes/namedType");
const constants_1 = require("../constants");
function RootChoiceComponentsFromObject(obj) {
    const { namedTypeTag } = obj;
    if (namedTypeTag) {
        return namedType_1.NamedType.fromObject(obj);
    }
    const { extensionMarkerTag } = obj;
    if (extensionMarkerTag) {
        return extensionMarker_1.ExtensionMarker.getInstance();
    }
    const { extensionAdditionAlternativeGroupTag } = obj;
    if (extensionAdditionAlternativeGroupTag) {
        return extensionAdditionAlternativeGroup_1.ExtensionAdditionAlternativeGroup.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.RootChoiceComponentsFromObject = RootChoiceComponentsFromObject;
//# sourceMappingURL=rootChoiceComponents.js.map