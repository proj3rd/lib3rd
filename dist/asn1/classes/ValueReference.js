"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../../common/spreadsheet");
const spreadsheet_3 = require("../formatter/spreadsheet");
class ValueReference {
    constructor(valueReference) {
        this.valueReference = valueReference;
    }
    expand(modules, parameterMappings) {
        return this;
    }
    getDepth() {
        return 0;
    }
    toSpreadsheet(worksheet, row, depth) {
        spreadsheet_3.appendInColumn(row, spreadsheet_3.HEADER_TYPE, this.toString());
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_2.drawBorder(worksheet, r, depth);
    }
    toString() {
        return this.valueReference;
    }
}
exports.ValueReference = ValueReference;
//# sourceMappingURL=ValueReference.js.map