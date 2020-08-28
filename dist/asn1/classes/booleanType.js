"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
class BooleanType {
    constructor() {
    }
    static getInstance() {
        return BooleanType.instance;
    }
    expand(modules, parameterMappings) {
        return this;
    }
    getDepth() {
        return 0;
    }
    setConstraints(constraints) {
        if (constraints.length > 0) {
            unimpl_1.unimpl();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        row[spreadsheet_1.HEADER_TYPE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        return 'BOOLEAN';
    }
}
exports.BooleanType = BooleanType;
BooleanType.instance = new BooleanType();
//# sourceMappingURL=booleanType.js.map