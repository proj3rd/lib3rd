"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualParameterFromObject = void 0;
const objectClassReference_1 = require("../classes/objectClassReference");
const objectSet_1 = require("../classes/objectSet");
const constants_1 = require("../constants");
const asnType_1 = require("./asnType");
const value_1 = require("./value");
function ActualParameterFromObject(obj) {
    try {
        return asnType_1.AsnTypeFromObject(obj);
    }
    catch (e) { }
    finally { }
    try {
        return value_1.ValueFromObject(obj);
    }
    catch (e) { }
    finally { }
    const { objectClassReferenceTag } = obj;
    if (objectClassReferenceTag) {
        return objectClassReference_1.ObjectClassReference.fromObject(obj);
    }
    const { objectSetTag } = obj;
    if (objectSetTag) {
        return objectSet_1.ObjectSet.fromObject(obj);
    }
    throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
}
exports.ActualParameterFromObject = ActualParameterFromObject;
//# sourceMappingURL=actualParamter.js.map