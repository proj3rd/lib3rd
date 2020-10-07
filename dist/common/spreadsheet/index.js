"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceljs_1 = require("exceljs");
const style_1 = require("./style");
function headerIndexed(header, index) {
    return `${header}[${index}]`;
}
exports.headerIndexed = headerIndexed;
function addHeader(worksheet, headerList, depth) {
    const columns = [
        ...new Array(depth + 1).fill(undefined).map((_, index) => headerIndexed(headerList[0], index)),
        ...headerList.slice(1),
    ].map((key, index) => {
        let width;
        if (index < depth) {
            width = 3;
        }
        else if (index > depth) {
            width = 15;
        }
        else {
            width = 45;
        }
        return { key, width };
    });
    // eslint-disable-next-line no-param-reassign
    worksheet.columns = columns;
    const headers = [
        ...new Array(depth + 1).fill(undefined)
            .map((_, index) => (index === 0 ? headerList[0] : undefined)),
        ...headerList.slice(1),
    ];
    const row = worksheet.addRow(headers);
    columns.forEach((column) => {
        const { key } = column;
        row.getCell(key).style = {
            font: style_1.FontBold,
            border: style_1.BorderBottom,
        };
    });
}
exports.addHeader = addHeader;
function addTitle(worksheet, title) {
    // eslint-disable-next-line no-param-reassign
    worksheet.addRow([title]).font = {
        size: 22,
        bold: true,
    };
}
exports.addTitle = addTitle;
function addWorksheet(workbook, name, ySplit) {
    const ws = workbook.addWorksheet(name, {
        views: [{
                state: 'frozen', xSplit: 0, ySplit, showGridLines: false,
            }],
    });
    /**
     * TODO
     * [BUG] outlineProperties does not exist on type ' WorksheetProperties
     * https://github.com/exceljs/exceljs/issues/1351
     */
    ws.properties.outlineProperties = {
        summaryBelow: false,
    };
    return ws;
}
exports.addWorksheet = addWorksheet;
function drawBorder(worksheet, row, depth, border) {
    worksheet.columns.forEach((column, index) => {
        const { key } = column;
        if (key === undefined) {
            return;
        }
        let borderExtra;
        if (index === worksheet.columns.length - 1) {
            borderExtra = style_1.BorderRightTop;
        }
        else if (index < depth) {
            borderExtra = style_1.BorderLeft;
        }
        else if (index > depth) {
            borderExtra = style_1.BorderTop;
        }
        else {
            borderExtra = style_1.BorderLeftTop;
        }
        const b = border || borderExtra;
        // eslint-disable-next-line no-param-reassign
        row.getCell(index + 1).style = { border: b };
    });
}
exports.drawBorder = drawBorder;
function getWorkbook(workbook) {
    if (workbook) {
        return workbook;
    }
    const wb = new exceljs_1.Workbook();
    wb.creator = 'https://github.com/3gpp-network/lib3rd';
    return wb;
}
exports.getWorkbook = getWorkbook;
function setOutlineLevel(row, depth) {
    if (depth === 0) {
        return;
    }
    // eslint-disable-next-line no-param-reassign
    row.outlineLevel = Math.min(depth, 7);
}
exports.setOutlineLevel = setOutlineLevel;
function uniqueSheetname(workbook, name) {
    const { length } = workbook.worksheets;
    return `${length} ${name}`.substring(0, 31);
}
exports.uniqueSheetname = uniqueSheetname;
//# sourceMappingURL=index.js.map