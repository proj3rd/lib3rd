"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TypeFieldSpec {
    constructor(fieldRerence, optionality) {
        this.fieldReference = fieldRerence;
        this.optionality = optionality;
    }
    toString() {
        if (this.optionality === undefined) {
            return this.fieldReference.toString();
        }
        return `${this.fieldReference.toString()} ${this.optionality.toString()}`;
    }
}
exports.TypeFieldSpec = TypeFieldSpec;
//# sourceMappingURL=typeFieldSpec.js.map