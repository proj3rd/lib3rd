"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../../common/spreadsheet");
const style_1 = require("../../common/spreadsheet/style");
const definition_1 = require("./definition");
class Conditions {
    constructor(conditionList) {
        this.conditionList = conditionList;
    }
    toSpreadsheet(worksheet) {
        worksheet.addRow({
            [spreadsheet_1.headerIndexed(definition_1.HEADER_NAME_BASE, 0)]: 'Condition',
            [definition_1.HEADER_DESCRIPTION]: 'Explanation',
        }).font = style_1.FontBold;
        this.conditionList.forEach((cond) => {
            const { condition, explanation } = cond;
            const rowInput = {
                [spreadsheet_1.headerIndexed(definition_1.HEADER_NAME_BASE, 0)]: condition,
                [definition_1.HEADER_DESCRIPTION]: explanation,
            };
            const r = worksheet.addRow(rowInput);
            spreadsheet_1.drawBorder(worksheet, r, 0);
        });
        spreadsheet_1.drawBorder(worksheet, worksheet.addRow([]), 0, style_1.BorderTop);
    }
}
exports.Conditions = Conditions;
//# sourceMappingURL=conditions.js.map