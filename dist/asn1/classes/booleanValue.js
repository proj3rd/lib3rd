"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const spreadsheet_3 = require("../../common/spreadsheet");
class BooleanValue {
    constructor(literal) {
        this.literal = literal;
        if (literal === 'TRUE' || literal === 'true') {
            this.value = true;
        }
        else if (literal === 'FALSE' || literal === 'false') {
            this.value = false;
        }
        else {
            throw Error();
        }
    }
    expand(moduleS, parameterMappings) {
        return this;
    }
    getDepth() {
        return 0;
    }
    toSpreadsheet(worksheet, row, depth) {
        spreadsheet_2.appendInColumn(row, spreadsheet_2.HEADER_TYPE, this.toString());
        const r = worksheet.addRow(row);
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_3.drawBorder(worksheet, r, depth);
    }
    toString() {
        return this.literal;
    }
}
exports.BooleanValue = BooleanValue;
//# sourceMappingURL=booleanValue.js.map