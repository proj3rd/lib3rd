"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectClassReference = void 0;
const constants_1 = require("../constants");
/**
 * X.681 clause 7.1
 */
class ObjectClassReference {
    constructor(objectClassReference) {
        this.objectClassReferenceTag = true;
        this.objectClassReference = objectClassReference;
    }
    static fromObject(obj) {
        const { objectClassReference: objectClassReferenceObject, objectClassReferenceTag, } = obj;
        if (!objectClassReferenceTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof objectClassReferenceObject !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        return new ObjectClassReference(objectClassReferenceObject);
    }
    toString() {
        return this.objectClassReference;
    }
}
exports.ObjectClassReference = ObjectClassReference;
//# sourceMappingURL=objectClassReference.js.map