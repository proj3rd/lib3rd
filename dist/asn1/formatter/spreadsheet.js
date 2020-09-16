"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const exceljs_1 = require("exceljs");
const style_1 = require("./style");
exports.HEADER_NAME_BASE = 'Name';
exports.HEADER_REFERENCE = 'Reference';
exports.HEADER_TYPE = 'Type';
exports.HEADER_OPTIONAL = 'Optional';
exports.HEADER_UNIQUE = 'Unique';
exports.HEADER_TAG = 'Tag';
function addHeader(worksheet, depth) {
    const columns = [
        ...new Array(depth + 1).fill(undefined).map((_, index) => {
            return headerIndexed(exports.HEADER_NAME_BASE, index);
        }),
        exports.HEADER_REFERENCE,
        exports.HEADER_TYPE,
        exports.HEADER_OPTIONAL,
        exports.HEADER_UNIQUE,
        exports.HEADER_TAG,
    ].map((key, index) => {
        const width = index < depth ? 3 : index > depth ? 15 : 45;
        return { key, width };
    });
    worksheet.columns = columns;
    const headers = [
        ...new Array(depth + 1).fill(undefined).map((_, index) => {
            return index === 0 ? exports.HEADER_NAME_BASE : undefined;
        }),
        exports.HEADER_REFERENCE,
        exports.HEADER_TYPE,
        exports.HEADER_OPTIONAL,
        exports.HEADER_UNIQUE,
        exports.HEADER_TAG,
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
    worksheet.addRow([title]).font = {
        size: 22,
        bold: true,
    };
}
exports.addTitle = addTitle;
function addWorksheet(workbook, name) {
    const ws = workbook.addWorksheet(name, {
        views: [{ state: 'frozen', xSplit: 0, ySplit: 3, showGridLines: false }],
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
function appendInColumn(row, column, value) {
    const col = row[column];
    row[column] = col === undefined ? value : `${col} ${value}`;
}
exports.appendInColumn = appendInColumn;
function drawBorder(worksheet, row, depth, border) {
    worksheet.columns.forEach((column, index) => {
        const { key } = column;
        if (key === undefined) {
            return;
        }
        const b = border
            ? border
            : index === worksheet.columns.length - 1
                ? style_1.BorderRightTop
                : index < depth
                    ? style_1.BorderLeft
                    : index > depth
                        ? style_1.BorderTop
                        : style_1.BorderLeftTop;
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
function headerIndexed(header, index) {
    return `${header}[${index}]`;
}
exports.headerIndexed = headerIndexed;
function setOutlineLevel(row, depth) {
    if (depth === 0) {
        return;
    }
    row.outlineLevel = Math.min(depth, 7);
}
exports.setOutlineLevel = setOutlineLevel;
function uniqueSheetname(workbook, name) {
    const { length } = workbook.worksheets;
    return `${length} ${name}`.substring(0, 31);
}
exports.uniqueSheetname = uniqueSheetname;
//# sourceMappingURL=spreadsheet.js.map