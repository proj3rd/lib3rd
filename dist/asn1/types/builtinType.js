"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuiltinTypeFromObject = void 0;
const bitStringType_1 = require("../classes/bitStringType");
const booleanType_1 = require("../classes/booleanType");
const characterStringType_1 = require("../classes/characterStringType");
const choiceType_1 = require("../classes/choiceType");
const enumeratedType_1 = require("../classes/enumeratedType");
const integerType_1 = require("../classes/integerType");
const nullType_1 = require("../classes/nullType");
const objectClassFieldType_1 = require("../classes/objectClassFieldType");
const objectIdentifierType_1 = require("../classes/objectIdentifierType");
const octetStringType_1 = require("../classes/octetStringType");
const sequenceOfType_1 = require("../classes/sequenceOfType");
const sequenceType_1 = require("../classes/sequenceType");
const constants_1 = require("../constants");
function BuiltinTypeFromObject(obj) {
    const { octetStringTypeTag } = obj;
    if (octetStringTypeTag) {
        return octetStringType_1.OctetStringType.fromObject(obj);
    }
    const { bitStringTypeTag } = obj;
    if (bitStringTypeTag) {
        return bitStringType_1.BitStringType.fromObject(obj);
    }
    const { characterStringTypeTag } = obj;
    if (characterStringTypeTag) {
        return characterStringType_1.CharacterStringType.fromObject(obj);
    }
    const { choiceTypeTag } = obj;
    if (choiceTypeTag) {
        return choiceType_1.ChoiceType.fromObject(obj);
    }
    const { enumeratedTypeTag } = obj;
    if (enumeratedTypeTag) {
        return enumeratedType_1.EnumeratedType.fromObject(obj);
    }
    const { integerTypeTag } = obj;
    if (integerTypeTag) {
        return integerType_1.IntegerType.fromObject(obj);
    }
    const { sequenceTypeTag } = obj;
    if (sequenceTypeTag) {
        return sequenceType_1.SequenceType.fromObject(obj);
    }
    const { sequenceOfTypeTag } = obj;
    if (sequenceOfTypeTag) {
        return sequenceOfType_1.SequenceOfType.fromObject(obj);
    }
    const { objectIdentifierTypeTag } = obj;
    if (objectIdentifierTypeTag) {
        return objectIdentifierType_1.ObjectIdentifierType.fromObject(obj);
    }
    const { objectClassFieldType } = obj;
    if (objectClassFieldType) {
        return objectClassFieldType_1.ObjectClassFieldType.fromObject(obj);
    }
    const { booleanTypeTag } = obj;
    if (booleanTypeTag) {
        return booleanType_1.BooleanType.fromObject(obj);
    }
    const { nullTypeTag } = obj;
    if (nullTypeTag) {
        return nullType_1.NullType.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.BuiltinTypeFromObject = BuiltinTypeFromObject;
//# sourceMappingURL=builtinType.js.map