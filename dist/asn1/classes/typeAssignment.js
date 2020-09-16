"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const unimpl_1 = require("unimpl");
const spreadsheet_1 = require("../../common/spreadsheet");
const style_1 = require("../../common/spreadsheet/style");
const spreadsheet_2 = require("../formatter/spreadsheet");
const spreadsheet_3 = require("../../common/spreadsheet");
const objectSet_1 = require("./objectSet");
class TypeAssignment {
    constructor(name, asnType) {
        this.name = name;
        this.asnType = asnType;
        if (asnType instanceof objectSet_1.ObjectSet) {
            return unimpl_1.unimpl('ObjectSet cannot be used in instantiating but expanding TypeAssignment');
        }
    }
    /**
     * Expand `asnTye` property. This will mutate the object itself.
     * @param modules
     */
    expand(modules) {
        const expandedType = lodash_1.cloneDeep(this.asnType).expand(modules, []);
        if (!lodash_1.isEqual(expandedType, this.asnType)) {
            this.asnType = expandedType;
        }
        return this;
    }
    getDepth() {
        return this.asnType.getDepth();
    }
    toSpreadsheet(workbook) {
        const wb = spreadsheet_1.getWorkbook(workbook);
        const sheetname = spreadsheet_1.uniqueSheetname(wb, this.name);
        const ws = spreadsheet_1.addWorksheet(wb, sheetname, 3);
        const depth = this.getDepth();
        spreadsheet_1.addTitle(ws, this.name);
        ws.addRow([]);
        spreadsheet_1.addHeader(ws, spreadsheet_2.HEADER_LIST, depth);
        this.asnType.toSpreadsheet(ws, {
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, 0)]: this.name,
        }, 0);
        spreadsheet_3.drawBorder(ws, ws.addRow([]), 0, style_1.BorderTop);
        return wb;
    }
    toString() {
        return `${this.name} ::= ${this.asnType.toString()}`;
    }
}
exports.TypeAssignment = TypeAssignment;
//# sourceMappingURL=typeAssignment.js.map