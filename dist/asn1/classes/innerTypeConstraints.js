"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InnerTypeConstraints = void 0;
const constants_1 = require("../constants");
const typeConstraintsComponent_1 = require("../types/typeConstraintsComponent");
/**
 * Currently it supports only MultipleTypeConstraints
 */
class InnerTypeConstraints {
    constructor(components) {
        this.innerTypeConstraintsTag = true;
        this.components = components;
    }
    static fromObject(obj) {
        const { components: componentsObj, innerTypeConstraintsTag } = obj;
        if (!innerTypeConstraintsTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        if (!(componentsObj instanceof Array)) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        const components = componentsObj.map((item) => typeConstraintsComponent_1.TypeConstraintsComponentFromObject(item));
        return new InnerTypeConstraints(components);
    }
    toString() {
        const componentsString = this.components
            .map((component) => component.toString())
            .join(', ');
        return `WITH COMPONENTS {${componentsString}}`;
    }
}
exports.InnerTypeConstraints = InnerTypeConstraints;
//# sourceMappingURL=innerTypeConstraints.js.map