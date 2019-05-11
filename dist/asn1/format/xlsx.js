"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var xl = require("excel4node");
var xlsx_1 = require("../../utils/xlsx");
exports.formatConfigDefault = {
    order: ['ie', 'reference', 'type', 'optional', 'tag'],
    grouping: true,
    freezeHeader: false,
    style: {
        title: {
            font: {
                size: 18,
                bold: true
            }
        },
        header: {
            font: {
                bold: true
            }
        },
        indentWidth: 3
    }
};
var headerDefinition = {
    ie: 'IE Name',
    reference: 'Reference Name',
    type: 'Type',
    optional: 'Optional',
    tag: 'Tag'
};
var headerConstants = {
    constant: 'Constant',
    value: 'Value'
};
/**
 * Format ASN.1 in xlsx
 * @param msgIes Array of ASN.1 objects you want to format
 * @returns Workbook object of excel4node
 */
function format(msgIes, formatConfig) {
    if (formatConfig === void 0) { formatConfig = exports.formatConfigDefault; }
    var wb = new xl.Workbook({ author: xlsx_1.author });
    msgIes.forEach(function (msgIe, index) {
        var _a, _b;
        logging_1.log.debug("Formatting " + msgIe.name + " in xlsx...");
        var indexString = index.toString();
        var sheetname = msgIe.name.substr(0, 31 - (indexString.length + 1)) + " " + indexString;
        var ws = wb.addWorksheet(sheetname, {
            outline: {
                summaryBelow: false
            }
        });
        var depthMax = msgIe.definition.depthMax();
        var _c = [1, 1], row = _c[0], col = _c[1];
        ws.cell(row++, col).string(msgIe.name).style(formatConfig.style.title);
        row++;
        var constants = [];
        _a = fillDefinition(msgIe, ws, row, col, depthMax, constants, formatConfig), row = _a[0], col = _a[1];
        if (constants.length) {
            _b = fillConstants(constants, ws, row, col, depthMax, formatConfig), row = _b[0], col = _b[1];
        }
    });
    return wb;
}
exports.format = format;
function fillDefinition(msgIe, ws, row, col, depthMax, constants, formatConfig) {
    if (formatConfig === void 0) { formatConfig = exports.formatConfigDefault; }
    var _a, _b;
    if (formatConfig.freezeHeader) {
        ws.row(row).freeze();
    }
    ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(formatConfig.style.header);
    _a = fillRow(headerDefinition, ws, row, col, depthMax, formatConfig), row = _a[0], col = _a[1];
    _b = msgIe.definition.fillWorksheet({ ie: msgIe.name }, ws, row, col, depthMax, constants, formatConfig), row = _b[0], col = _b[1];
    ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(xlsx_1.styleBorderTop);
    return [row, col];
}
function fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth) {
    if (depth === void 0) { depth = 0; }
    formatConfig.order.forEach(function (field, index) {
        if (index === 0) {
            ws.cell(row, col).style(xlsx_1.styleBorderLeft);
        }
        switch (field) {
            case 'ie': {
                for (var i = 0; i < depth; i++) {
                    ws.column(col).setWidth(formatConfig.style.indentWidth);
                    ws.cell(row, col++).style(xlsx_1.styleBorderLeft);
                }
                if ('ie' in ieElem) {
                    ws.cell(row, col).string(ieElem.ie).style(xlsx_1.styleBorderLeft).style(xlsx_1.styleBorderTop);
                }
                ws.column(col++).setWidth(formatConfig.style.indentWidth);
                for (var i = depth; i < depthMax; i++) {
                    ws.column(col).setWidth(formatConfig.style.indentWidth);
                    ws.cell(row, col++).style(xlsx_1.styleBorderTop);
                }
                ws.column(col - 1).setWidth(formatConfig.style.indentWidth * 10);
                break;
            }
            case 'reference': {
                if ('reference' in ieElem) {
                    ws.cell(row, col).string(ieElem.reference);
                }
                ws.cell(row, col++).style(xlsx_1.styleBorderTop);
                break;
            }
            case 'type': {
                if ('type' in ieElem) {
                    ws.cell(row, col).string(ieElem.type);
                }
                ws.cell(row, col++).style(xlsx_1.styleBorderTop);
                break;
            }
            case 'optional': {
                if ('optional' in ieElem) {
                    ws.cell(row, col).string(ieElem.optional);
                }
                ws.cell(row, col++).style(xlsx_1.styleBorderTop);
                break;
            }
            case 'tag': {
                if ('tag' in ieElem) {
                    ws.cell(row, col).string(ieElem.tag);
                }
                ws.cell(row, col++).style(xlsx_1.styleBorderTop);
                break;
            }
        }
        if (index === formatConfig.order.length - 1) {
            ws.cell(row, col).style(xlsx_1.styleBorderLeft);
        }
    });
    row++;
    col = 1;
    return [row, col];
}
exports.fillRow = fillRow;
function fillConstants(constants, ws, row, col, depthMax, formatConfig) {
    [headerConstants].concat(constants).forEach(function (rangeElem) {
        ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(xlsx_1.styleBorderTop);
        ws.cell(row, col + depthMax + formatConfig.order.length).style(xlsx_1.styleBorderLeft);
        ws.cell(row, col).string(rangeElem.constant).style(xlsx_1.styleBorderLeft);
        ws.cell(row++, col + depthMax + 1).string(rangeElem.value);
    });
    ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(xlsx_1.styleBorderTop);
    return [row, col];
}
