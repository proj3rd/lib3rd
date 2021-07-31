"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrimitiveFieldName = void 0;
const constants_1 = require("../constants");
class PrimitiveFieldName {
    constructor(name) {
        this.primitiveFieldNameTag = true;
        this.name = name;
    }
    static fromObject(obj) {
        const { name, primitiveFieldNameTag } = obj;
        if (!primitiveFieldNameTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!name || typeof name !== 'string') {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        return new PrimitiveFieldName(name);
    }
    toString() {
        return `&${this.name}`;
    }
}
exports.PrimitiveFieldName = PrimitiveFieldName;
//# sourceMappingURL=primitiveFieldName.js.map