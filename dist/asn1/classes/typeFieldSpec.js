"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const spreadsheet_3 = require("../../common/spreadsheet");
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
        row[spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)] = this.fieldReference.toString();
        row[spreadsheet_2.HEADER_OPTIONAL] = this.optionality
            ? this.optionality.toString()
            : undefined;
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_3.drawBorder(worksheet, r, depth);
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