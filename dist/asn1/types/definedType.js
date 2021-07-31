"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinedTypeFromObject = void 0;
const externalTypeReference_1 = require("../classes/externalTypeReference");
const parameterizedType_1 = require("../classes/parameterizedType");
const typeReference_1 = require("../classes/typeReference");
const constants_1 = require("../constants");
// ParamterizedValueSetType
function DefinedTypeFromObject(obj) {
    const { externalTypeReferenceTag } = obj;
    if (externalTypeReferenceTag) {
        return externalTypeReference_1.ExternalTypeReference.fromObject(obj);
    }
    const { typeReferenceTag } = obj;
    if (typeReferenceTag) {
        return typeReference_1.TypeReference.fromObject(obj);
    }
    const { paramterizedTypeTag } = obj;
    if (paramterizedTypeTag) {
        return parameterizedType_1.ParameterizedType.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.DefinedTypeFromObject = DefinedTypeFromObject;
//# sourceMappingURL=definedType.js.map