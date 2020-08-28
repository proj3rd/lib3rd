"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const formatter_1 = require("../formatter");
const spreadsheet_1 = require("../formatter/spreadsheet");
const style_1 = require("../formatter/style");
class ObjectClassAssignment {
    constructor(name, objectClass) {
        this.name = name;
        this.objectClass = objectClass;
    }
    expand(modules, parameterMappings) {
        return unimpl_1.unimpl();
    }
    getDepth() {
        return this.objectClass.getDepth();
    }
    toSpreadsheet(workbook) {
        const wb = formatter_1.getWorkbook(workbook);
        const sheetname = spreadsheet_1.uniqueSheetname(wb, this.name);
        const ws = spreadsheet_1.addWorksheet(wb, sheetname);
        const depth = this.getDepth();
        spreadsheet_1.addTitle(ws, this.name);
        ws.addRow([]);
        spreadsheet_1.addHeader(ws, depth);
        this.objectClass.toSpreadsheet(ws, {
            [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, 0)]: this.name,
        }, 0);
        spreadsheet_1.drawBorder(ws, ws.addRow([]), 0, style_1.BorderTop);
        return wb;
    }
    toString() {
        return `${this.name} ::= ${this.objectClass.toString()}`;
    }
}
exports.ObjectClassAssignment = ObjectClassAssignment;
//# sourceMappingURL=objectClassAssignment.js.map