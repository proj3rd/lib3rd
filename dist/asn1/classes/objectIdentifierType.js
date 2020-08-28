"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../formatter/spreadsheet");
// TODO: Make it singleont
class ObjectIdentifierType {
    expand(modules, parameterMappings) {
        return this;
    }
    getDepth() {
        return 0;
    }
    setConstraints(constraints) {
        if (constraints.length > 0) {
            return unimpl_1.todo();
        }
    }
    toSpreadsheet(worksheet, row, depth) {
        row[spreadsheet_1.HEADER_TYPE] = this.toString();
        const r = worksheet.addRow(row);
        spreadsheet_1.drawBorder(worksheet, r, depth);
    }
    toString() {
        return 'OBJECT IDENTIFIER';
    }
}
exports.ObjectIdentifierType = ObjectIdentifierType;
//# sourceMappingURL=objectIdentifierType.js.map