"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../../common/spreadsheet");
const style_1 = require("../../common/spreadsheet/style");
const conditions_1 = require("./conditions");
const rangeBounds_1 = require("./rangeBounds");
exports.HEADER_NAME_BASE = 'IE/Group Name';
const HEADER_PRESENCE = 'Presence';
const HEADER_RANGE = 'Range';
const HEADER_TYPE_AND_REF = 'IE type and reference';
exports.HEADER_DESCRIPTION = 'Semantics description';
const HEADER_CRITICALITY = 'Criticality';
const HEADER_ASSIGNED_CRITICALITY = 'Assigned Criticality';
const HEADER_LIST = [
    exports.HEADER_NAME_BASE,
    HEADER_PRESENCE,
    HEADER_RANGE,
    HEADER_TYPE_AND_REF,
    exports.HEADER_DESCRIPTION,
    HEADER_CRITICALITY,
    HEADER_ASSIGNED_CRITICALITY,
];
class Definition {
    constructor(definition) {
        const { sectionNumber, name, descriptionList, direction, elementList, rangeBoundList, conditionList, } = definition;
        this.sectionNumber = sectionNumber;
        this.name = name;
        this.descriptionList = descriptionList;
        this.direction = direction;
        this.elementList = elementList;
        this.rangeBounds = new rangeBounds_1.RangeBounds(rangeBoundList);
        this.conditions = new conditions_1.Conditions(conditionList);
    }
    getDepth() {
        return this.elementList.reduce((prev, curr) => {
            return Math.max(prev, curr.depth);
        }, 0);
    }
    toSpreadsheet(workbook) {
        const wb = spreadsheet_1.getWorkbook(workbook);
        const sheetname = `${this.sectionNumber} ${this.name}`.substring(0, 31);
        const ws = spreadsheet_1.addWorksheet(wb, sheetname, 5);
        const depth = this.getDepth();
        spreadsheet_1.addTitle(ws, this.name);
        ws.addRow([this.descriptionList.join('\n')]);
        ws.addRow([this.direction]);
        ws.addRow([]);
        spreadsheet_1.addHeader(ws, HEADER_LIST, depth);
        this.elementList.forEach((element) => {
            const { name, presence, range, typeAndRef, description, criticality, assignedCriticality, depth, } = element;
            const rowInput = {
                [spreadsheet_1.headerIndexed(exports.HEADER_NAME_BASE, depth)]: name,
                [HEADER_PRESENCE]: presence,
                [HEADER_RANGE]: range,
                [HEADER_TYPE_AND_REF]: typeAndRef,
                [exports.HEADER_DESCRIPTION]: description,
                [HEADER_CRITICALITY]: criticality,
                [HEADER_ASSIGNED_CRITICALITY]: assignedCriticality,
            };
            const r = ws.addRow(rowInput);
            spreadsheet_1.setOutlineLevel(r, depth);
            spreadsheet_1.drawBorder(ws, r, depth);
        });
        spreadsheet_1.drawBorder(ws, ws.addRow([]), 0, style_1.BorderTop);
        this.conditions.toSpreadsheet(ws);
        this.rangeBounds.toSpreadsheet(ws);
        return wb;
    }
}
exports.Definition = Definition;
//# sourceMappingURL=definition.js.map