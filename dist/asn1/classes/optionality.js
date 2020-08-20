"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * `Optionality` class indicates that `ComponentType` is optional.
 * For an optional component type without a default value,
 * use a singleton instance: `Optionality.getInstance()`.
 * For an optional componenttype with a default value,
 * instantiate a new instance: `new Optionality(defaultValue)`.
 */
class Optionality {
    constructor(defaultValue) {
        this.defaultValue = defaultValue;
    }
    getDefaultValue() {
        return this.defaultValue;
    }
    toString() {
        if (this.defaultValue !== undefined) {
            return `DEFAULT ${this.defaultValue.toString()}`;
        }
        return 'OPTIONAL';
    }
}
exports.Optionality = Optionality;
//# sourceMappingURL=optionality.js.map