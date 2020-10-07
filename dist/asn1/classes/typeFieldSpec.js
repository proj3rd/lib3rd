"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
class TypeFieldSpec {
    constructor(fieldRerence, optionality) {
        this.fieldReference = fieldRerence;
        this.optionality = optionality;
    }
    // eslint-disable-next-line no-unused-vars
    expand(modules, parameterMappings) {
        // TODO: Shall `optionality` be expanded?
        return this;
    }
    // eslint-disable-next-line class-methods-use-this
    getDepth() {
        return 0;
    }
    toSpreadsheet(worksheet, row, depth) {
        // eslint-disable-next-line no-param-reassign
        row[spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)] = this.fieldReference.toString();
        // eslint-disable-next-line no-param-reassign
        row[spreadsheet_2.HEADER_OPTIONAL] = this.optionality
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