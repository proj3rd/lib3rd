"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Optionality = void 0;
const constants_1 = require("../constants");
const asnType_1 = require("../types/asnType");
const value_1 = require("../types/value");
/**
 * `Optionality` class indicates that `ComponentType` is optional.
 */
class Optionality {
    constructor(defaultValue) {
        this.optionalityTag = true;
        this.defaultValue = defaultValue;
    }
    static fromObject(obj) {
        const { defaultValue: defaultValueObject, optionalityTag } = obj;
        if (!optionalityTag) {
            throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
        }
        try {
            const defaultValue = asnType_1.AsnTypeFromObject(defaultValueObject);
            return new Optionality(defaultValue);
        }
        catch (e) {
        }
        finally {
        }
        try {
            const defaultValue = value_1.ValueFromObject(defaultValueObject);
            return new Optionality(defaultValueObject);
        }
        catch (e) {
        }
        finally {
        }
        if (defaultValueObject === undefined) {
            return new Optionality();
        }
        throw Error(constants_1.MSG_ERR_ASN1_MALFORMED_SERIALIZATION);
    }
    getDefaultValue() {
        return this.defaultValue;
    }
    toString() {
        if (this.defaultValue !== undefined) {
            const stringified = this.defaultValue.toString();
            const defaultValue = stringified === '[object Object]' &&
                'literal' in this.defaultValue
                ? this.defaultValue.literal
                : this.defaultValue.toString();
            return `DEFAULT ${defaultValue}`;
        }
        return 'OPTIONAL';
    }
}
exports.Optionality = Optionality;
//# sourceMappingURL=optionality.js.map