"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../formatter/spreadsheet");
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
        spreadsheet_1.appendInColumn(row, spreadsheet_1.HEADER_TYPE, this.toString());
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        return this.valueReference;
    }
}
exports.ValueReference = ValueReference;
//# sourceMappingURL=ValueReference.js.map