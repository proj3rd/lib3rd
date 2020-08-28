"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../formatter/spreadsheet");
class FixedTypeValueFieldSpec {
    constructor(fieldRerence, asnType, unique, optionality) {
        this.fieldReference = fieldRerence;
        this.asnType = asnType;
        this.unique = unique;
        this.optionality = optionality;
    }
    getDepth() {
        return this.asnType.getDepth();
    }
    toSpreadsheet(worksheet, row, depth) {
        this.asnType.toSpreadsheet(worksheet, {
            [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, depth)]: this.fieldReference.toString(),
            [spreadsheet_1.HEADER_OPTIONAL]: this.optionality
                ? this.optionality.toString()
                : undefined,
            [spreadsheet_1.HEADER_UNIQUE]: this.unique ? 'UNIQUE' : undefined,
        }, depth);
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