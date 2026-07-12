"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinedObjectSetFromObject = void 0;
const externalObjectSetReference_1 = require("../classes/externalObjectSetReference");
const objectSetReference_1 = require("../classes/objectSetReference");
const constants_1 = require("../constants");
function DefinedObjectSetFromObject(obj) {
    const { externalObjectSetReferenceTag } = obj;
    if (externalObjectSetReferenceTag) {
        return externalObjectSetReference_1.ExternalObjectSetReference.fromObject(obj);
    }
    const { objectSetReference } = obj;
    if (objectSetReference) {
        return objectSetReference_1.ObjectSetReference.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.DefinedObjectSetFromObject = DefinedObjectSetFromObject;
//# sourceMappingURL=definedObjectSet.js.map