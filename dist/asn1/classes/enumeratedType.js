"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
class EnumeratedType {
    constructor(items) {
        this.items = items;
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
        const arrToString = [
            'ENUMERATED {',
            this.items.map((item) => item.toString()).join(', '),
            '}',
        ];
        return arrToString.join('');
    }
}
exports.EnumeratedType = EnumeratedType;
//# sourceMappingURL=enumeratedType.js.map