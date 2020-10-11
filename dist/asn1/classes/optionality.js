"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * `Optionality` class indicates that `ComponentType` is optional.
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