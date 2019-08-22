"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("../../utils/logging");
const xl = require("excel4node");
const xlsx_1 = require("../../utils/xlsx");
const utils_1 = require("../utils");
exports.formatConfigDefault = {
    order: ['ie', 'reference', 'type', 'optional', 'tag'],
    grouping: true,
    freezeHeader: false,
    style: {
        title: {
            font: {
                size: 18,
                bold: true,
            },
        },
        header: {
            font: {
                bold: true,
            },
        },
        indentWidth: 3,
    },
};
const headerDefinition = {
    ie: 'IE Name',
    reference: 'Reference Name',
    type: 'Type',
    optional: 'Optional',
    tag: 'Tag',
};
const headerConstants = {
    constant: 'Constant',
    value: 'Value',
};
/**
 * Format ASN.1 in xlsx
 * @param msgIes Array of ASN.1 objects you want to format
 * @returns Workbook object of excel4node
 */
function format(msgIes, asn1Pool, formatConfig = exports.formatConfigDefault) {
    const wb = new xl.Workbook({ author: xlsx_1.author });
    msgIes.forEach((msgIe, index) => {
        logging_1.log.debug(`Formatting ${msgIe.name} in xlsx...`);
        const indexString = index.toString();
        const sheetname = `${msgIe.name.substr(0, 31 - (indexString.length + 1))} ${indexString}`;
        const ws = wb.addWorksheet(sheetname, {
            outline: {
                summaryBelow: false,
            },
        });
        const depthMax = msgIe.definition.depthMax();
        let [row, col] = [1, 1];
        ws.cell(row++, col).string(msgIe.name).style(formatConfig.style.title);
        row++;
        const constants = [];
        [row, col] = fillDefinition(msgIe, ws, row, col, depthMax, constants, formatConfig);
        if (constants.length) {
            row++;
            [row, col] = fillConstants(constants, msgIe.definition.moduleName, asn1Pool, ws, row, col, depthMax, formatConfig);
        }
    });
    return wb;
}
exports.format = format;
function fillDefinition(msgIe, ws, row, col, depthMax, constants, formatConfig = exports.formatConfigDefault) {
    if (formatConfig.freezeHeader) {
        ws.row(row).freeze();
    }
    ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(formatConfig.style.header);
    [row, col] = fillRow(headerDefinition, ws, row, col, depthMax, formatConfig);
    const parameterList = msgIe.definition.parameterList;
    const parameterString = parameterList ? ` { ${parameterList.join(', ')} }` : '';
    [row, col] = msgIe.definition.fillWorksheet({ ie: `${msgIe.name}${parameterString}` }, ws, row, col, depthMax, constants, formatConfig);
    ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(xlsx_1.styleBorderTop);
    return [row, col];
}
function fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth = 0) {
    formatConfig.order.forEach((field, index) => {
        if (index === 0) {
            ws.cell(row, col).style(xlsx_1.styleBorderLeft);
        }
        switch (field) {
            case 'ie': {
                for (let i = 0; i < depth; i++) {
                    ws.column(col).setWidth(formatConfig.style.indentWidth);
                    ws.cell(row, col++).style(xlsx_1.styleBorderLeft);
                }
                ws.cell(row, col).string(ieElem.ie ? ieElem.ie : '').style(xlsx_1.styleBorderLeft).style(xlsx_1.styleBorderTop);
                ws.column(col++).setWidth(formatConfig.style.indentWidth);
                for (let i = depth; i < depthMax; i++) {
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
        if (formatConfig.grouping && depth > 0) {
            ws.row(row).group(Math.min(depth, 7));
        }
    });
    row++;
    col = 1;
    return [row, col];
}
exports.fillRow = fillRow;
function fillConstants(constants, moduleName, asn1Pool, ws, row, col, depthMax, formatConfig) {
    ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(formatConfig.style.header);
    [headerConstants, ...constants].forEach((rangeElem, index) => {
        if (index > 0) {
            rangeElem.value = utils_1.findConstantValue(rangeElem.constant, moduleName, asn1Pool);
        }
        ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(xlsx_1.styleBorderTop);
        ws.cell(row, col + depthMax + formatConfig.order.length).style(xlsx_1.styleBorderLeft);
        ws.cell(row, col).string(rangeElem.constant).style(xlsx_1.styleBorderLeft);
        if (rangeElem.value === null) {
            rangeElem.value = `Spec error: ${moduleName} neither defines nor imports ${rangeElem.constant}`;
        }
        if (isNaN(Number(rangeElem.value))) {
            ws.cell(row++, col + depthMax + 1).string(rangeElem.value);
        }
        else {
            ws.cell(row++, col + depthMax + 1).number(rangeElem.value);
        }
    });
    ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(xlsx_1.styleBorderTop);
    return [row, col];
}
