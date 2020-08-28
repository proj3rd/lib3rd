"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const formatter_1 = require("../formatter");
const spreadsheet_1 = require("../formatter/spreadsheet");
const style_1 = require("../formatter/style");
class TypeAssignment {
    constructor(name, asnType) {
        this.name = name;
        this.asnType = asnType;
    }
    expand(modules, parameterMappings) {
        const expandedType = this.asnType.expand(modules, parameterMappings);
        if (expandedType !== undefined) {
            this.asnType = expandedType;
        }
        return this;
    }
    getDepth() {
        return this.asnType.getDepth();
    }
    toSpreadsheet(workbook) {
        const wb = formatter_1.getWorkbook(workbook);
        const sheetname = spreadsheet_1.uniqueSheetname(wb, this.name);
        const ws = formatter_1.addWorksheet(wb, sheetname);
        const depth = this.getDepth();
        spreadsheet_1.addTitle(ws, this.name);
        ws.addRow([]);
        spreadsheet_1.addHeader(ws, depth);
        this.asnType.toSpreadsheet(ws, {
            [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, 0)]: this.name,
        }, 0);
        spreadsheet_1.drawBorder(ws, ws.addRow([]), 0, style_1.BorderTop);
        return wb;
    }
    toString() {
        return `${this.name} ::= ${this.asnType.toString()}`;
    }
}
exports.TypeAssignment = TypeAssignment;
//# sourceMappingURL=typeAssignment.js.map