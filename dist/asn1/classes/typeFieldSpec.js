"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../formatter/spreadsheet");
class TypeFieldSpec {
    constructor(fieldRerence, optionality) {
        this.fieldReference = fieldRerence;
        this.optionality = optionality;
    }
    expand(modules, parameterMappings) {
        // TODO: Shall `optionality` be expanded?
        return this;
    }
    getDepth() {
        return 0;
    }
    toSpreadsheet(worksheet, row, depth) {
        row[spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, depth)] = this.fieldReference.toString();
        row[spreadsheet_1.HEADER_OPTIONAL] = this.optionality
            ? this.optionality.toString()
            : undefined;
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
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