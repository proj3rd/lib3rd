"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class FixedTypeValueFieldSpec {
    constructor(fieldRerence, asnType, unique, optionality) {
        this.fieldReference = fieldRerence;
        this.asnType = asnType;
        this.unique = unique;
        this.optionality = optionality;
    }
    toString() {
        const arrToString = [
            this.fieldReference.toString(),
            this.asnType.toString(),
        ];
        if (this.unique) {
            arrToString.push('UNIQUE');
        }
        if (this.optionality !== undefined) {
            arrToString.push(this.optionality.toString());
        }
        return arrToString.join(' ');
    }
}
exports.FixedTypeValueFieldSpec = FixedTypeValueFieldSpec;
//# sourceMappingURL=fixedTypeValueFieldSpec.js.map