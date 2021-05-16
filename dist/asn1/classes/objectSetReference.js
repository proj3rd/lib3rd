"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSetReference = void 0;
const unimpl_1 = require("unimpl");
const constants_1 = require("../constants");
class ObjectSetReference {
    constructor(objectSetReference) {
        this.objectSetReferenceTag = true;
        this.objectSetReference = objectSetReference;
    }
    static fromObject(obj) {
        const { objectSetReference, objectSetReferenceTag } = obj;
        if (!objectSetReferenceTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof objectSetReference !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        return new ObjectSetReference(objectSetReference);
    }
    // eslint-disable-next-line class-methods-use-this, no-unused-vars
    expand(modules, parameterMappings) {
        return unimpl_1.unimpl();
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    toString() {
        return this.objectSetReference;
    }
}
exports.ObjectSetReference = ObjectSetReference;
//# sourceMappingURL=objectSetReference.js.map