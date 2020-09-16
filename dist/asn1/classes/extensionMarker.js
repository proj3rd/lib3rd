"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../../common/spreadsheet");
const spreadsheet_2 = require("../formatter/spreadsheet");
const spreadsheet_3 = require("../../common/spreadsheet");
class ExtensionMarker {
    constructor() {
    }
    static getInstance() {
        return ExtensionMarker.instance;
    }
    expand(modules, parameterMappings) {
        return this;
    }
    getDepth() {
        return 0;
    }
    toSpreadsheet(worksheet, row, depth) {
        const r = worksheet.addRow({
            [spreadsheet_1.headerIndexed(spreadsheet_2.HEADER_NAME_BASE, depth)]: this.toString(),
        });
        spreadsheet_1.setOutlineLevel(r, depth);
        spreadsheet_3.drawBorder(worksheet, r, depth);
    }
    toString() {
        return '...';
    }
}
exports.ExtensionMarker = ExtensionMarker;
ExtensionMarker.instance = new ExtensionMarker();
//# sourceMappingURL=extensionMarker.js.map