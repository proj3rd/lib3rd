"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementsFromObject = void 0;
const objectClass_1 = require("../classes/objectClass");
const constants_1 = require("../constants");
const asnType_1 = require("./asnType");
const objectSetElements_1 = require("./objectSetElements");
const subtypeElements_1 = require("./subtypeElements");
function ElementsFromObject(obj) {
    try {
        return subtypeElements_1.SubtypeElementsFromObject(obj);
    }
    catch (e) { }
    finally { }
    try {
        return objectSetElements_1.ObjectSetElementsFromObject(obj);
    }
    catch (e) { }
    finally { }
    try {
        return asnType_1.AsnTypeFromObject(obj);
    }
    catch (e) { }
    finally { }
    const { objectClassDefinitionTag } = obj;
    if (objectClassDefinitionTag) {
        return objectClass_1.ObjectClassDefinition.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.ElementsFromObject = ElementsFromObject;
//# sourceMappingURL=elements.js.map