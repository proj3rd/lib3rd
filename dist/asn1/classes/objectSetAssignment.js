"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const unimpl_1 = require("unimpl");
const formatter_1 = require("../formatter");
const spreadsheet_1 = require("../formatter/spreadsheet");
const style_1 = require("../formatter/style");
/**
 * X.681 clause 12.1
 * ```
 * name definedObjectClass ::= objectSet
 * ```
 */
class ObjectSetAssignment {
    constructor(name, definedObjectClass, objectSet) {
        this.name = name;
        this.definedObjectClass = definedObjectClass;
        this.objectSet = objectSet;
    }
    expand(modules, parameterMappings) {
        return unimpl_1.todo();
    }
    getDepth() {
        return this.objectSet.getDepth();
    }
    toSpreadsheet(workbook) {
        const wb = formatter_1.getWorkbook(workbook);
        const sheetname = spreadsheet_1.uniqueSheetname(wb, this.fullName());
        const ws = spreadsheet_1.addWorksheet(wb, sheetname);
        const depth = this.getDepth();
        spreadsheet_1.addTitle(ws, this.name);
        ws.addRow([]);
        spreadsheet_1.addHeader(ws, depth);
        this.objectSet.toSpreadsheet(ws, {
            [spreadsheet_1.headerIndexed(spreadsheet_1.HEADER_NAME_BASE, 0)]: this.fullName(),
        }, 0);
        spreadsheet_1.drawBorder(ws, ws.addRow([]), 0, style_1.BorderTop);
        return wb;
    }
    toString() {
        return `${this.fullName()} ::= ${this.objectSet.toString()}`;
    }
    fullName() {
        return `${this.name} ${this.definedObjectClass.toString()}`;
    }
}
exports.ObjectSetAssignment = ObjectSetAssignment;
//# sourceMappingURL=objectSetAssignment.js.map