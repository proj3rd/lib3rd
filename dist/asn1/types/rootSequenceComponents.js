"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootSequenceComponentsFromObject = void 0;
const componentType_1 = require("../classes/componentType");
const extensionAdditionGroup_1 = require("../classes/extensionAdditionGroup");
const extensionMarker_1 = require("../classes/extensionMarker");
const constants_1 = require("../constants");
function RootSequenceComponentsFromObject(obj) {
    const { componentTypeTag } = obj;
    if (componentTypeTag) {
        return componentType_1.ComponentType.fromObject(obj);
    }
    const { extensionMarkerTag } = obj;
    if (extensionMarkerTag) {
        return extensionMarker_1.ExtensionMarker.getInstance();
    }
    const { extensionAdditionGroupTag } = obj;
    if (extensionAdditionGroupTag) {
        return extensionAdditionGroup_1.ExtensionAdditionGroup.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.RootSequenceComponentsFromObject = RootSequenceComponentsFromObject;
//# sourceMappingURL=rootSequenceComponents.js.map