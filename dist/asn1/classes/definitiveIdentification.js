"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefinitiveIdentification = void 0;
const constants_1 = require("../constants");
const definitiveObjIdComponent_1 = require("../types/definitiveObjIdComponent");
class DefinitiveIdentification {
    constructor(definitiveOID) {
        this.definitiveIdentificationTag = true;
        this.definitiveOID = definitiveOID;
    }
    static fromObject(obj) {
        const { definitiveOID: definitiveOIDObjectList, definitiveIdentificationTag } = obj;
        if (!definitiveIdentificationTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(definitiveOIDObjectList instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const definitionOID = definitiveOIDObjectList.map((item) => definitiveObjIdComponent_1.DefinitiveObjIdComponentFromObject(item));
        return new DefinitiveIdentification(definitionOID);
    }
    toString() {
        if (this.definitiveOID.length === 0) {
            return '';
        }
        const innerString = this.definitiveOID
            .map((item) => `${item.name} (${item.number})`)
            .join(' ');
        return `{${innerString}}`;
    }
}
exports.DefinitiveIdentification = DefinitiveIdentification;
//# sourceMappingURL=definitiveIdentification.js.map