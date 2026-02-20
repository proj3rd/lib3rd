"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reference = void 0;
const constants_1 = require("../constants");
class Reference {
    constructor(name, parameterized = false) {
        this.referenceTag = true;
        this.name = name;
        this.parameterized = parameterized;
    }
    static fromObject(obj) {
        const { name, parameterized, referenceTag } = obj;
        if (!referenceTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (typeof name !== 'string'
            || typeof parameterized !== 'boolean') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        return new Reference(name, parameterized);
    }
    toString() {
        if (this.parameterized) {
            return `${this.name}{}`;
        }
        return this.name;
    }
}
exports.Reference = Reference;
//# sourceMappingURL=asnSymbol.js.map