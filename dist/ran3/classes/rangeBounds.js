"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const spreadsheet_1 = require("../../common/spreadsheet");
const style_1 = require("../../common/spreadsheet/style");
const definition_1 = require("./definition");
class RangeBounds {
    constructor(rangeBoundList) {
        this.rangeBoundList = rangeBoundList;
    }
    add(rangeBound) {
        const range = this.rangeBoundList.find((item) => item.rangeBound === rangeBound.rangeBound);
        if (range) {
            return;
        }
        this.rangeBoundList.push(rangeBound);
    }
    toSpreadsheet(worksheet) {
        // eslint-disable-next-line no-param-reassign
        worksheet.addRow({
            [spreadsheet_1.headerIndexed(definition_1.HEADER_NAME_BASE, 0)]: 'Condition',
            [definition_1.HEADER_DESCRIPTION]: 'Explanation',
        }).font = style_1.FontBold;
        this.rangeBoundList.forEach((range) => {
            const { rangeBound, explanation } = range;
            const rowInput = {
                [spreadsheet_1.headerIndexed(definition_1.HEADER_NAME_BASE, 0)]: rangeBound,
                [definition_1.HEADER_DESCRIPTION]: explanation,
            };
            const r = worksheet.addRow(rowInput);
            spreadsheet_1.drawBorder(worksheet, r, 0);
        });
        spreadsheet_1.drawBorder(worksheet, worksheet.addRow([]), 0, style_1.BorderTop);
    }
}
exports.RangeBounds = RangeBounds;
//# sourceMappingURL=rangeBounds.js.map