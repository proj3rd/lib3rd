"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var path_1 = require("path");
var xl = require("excel4node");
var parse_1 = require("./parse");
var formatConfigDefault = {
    order: ['ie/group name', 'presence', 'range', 'ie type and reference', 'semantics description',
        'criticality', 'assigned criticality'],
    showRange: true,
    showCondition: true,
    grouping: true,
    freezeHeader: true,
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
        }
    }
};
var headerDefinition = {
    'ie/group name': 'IE/Group Name',
    'presence': 'Presence',
    'range': 'Range',
    'ie type and reference': 'IE Type and Reference',
    'semantics description': 'Semantics Description',
    'criticality': 'Criticality',
    'assigned criticiality': 'Assigned Criticality',
    'depth': 0
};
var headerRange = {
    'range bound': 'Range bound',
    'explanation': 'Explanation'
};
var headerCondition = {
    condition: 'Condition',
    explanation: 'Explanation'
};
function format(msgIeDefinitions, formatConfig) {
    if (!formatConfig) {
        formatConfig = formatConfigDefault;
    }
    var wb = new xl.Workbook({
        author: '3GPP Utility https://github.com/gsongsong/3gpp'
    });
    msgIeDefinitions.forEach(function (msgIeDefinition) {
        var _a, _b, _c;
        var wsName = sheetname(msgIeDefinition);
        var ws = wb.addWorksheet(wsName, {
            outline: {
                summaryBelow: false
            }
        });
        var depthMax = msgIeDefinition.definition.reduce(function (prevDepth, currElem) {
            return Math.max(prevDepth, currElem.depth);
        }, 0);
        var _d = [1, 1], row = _d[0], col = _d[1];
        ws.cell(row++, col).string(msgIeDefinition.name).style(formatConfig.style.title);
        if (msgIeDefinition.description) {
            ws.cell(row++, col).string(msgIeDefinition.description);
        }
        if (msgIeDefinition.direction) {
            ws.cell(row++, col).string("Direction: " + msgIeDefinition.direction);
        }
        row++;
        _a = fillDefinition(msgIeDefinition.definition, ws, row, col, depthMax, formatConfig), row = _a[0], col = _a[1];
        if (msgIeDefinition.range && formatConfig.showRange) {
            row++;
            _b = fillRange(msgIeDefinition.range, ws, row, col, depthMax, formatConfig), row = _b[0], col = _b[1];
        }
        if (msgIeDefinition.condition && formatConfig.showCondition) {
            row++;
            _c = fillCondition(msgIeDefinition.condition, ws, row, col, depthMax, formatConfig), row = _c[0], col = _c[1];
        }
    });
    return wb;
}
exports.format = format;
function sheetname(msgIeDefinition) {
    return (msgIeDefinition.section + " " + msgIeDefinition.name).substr(0, 31);
}
function fillDefinition(definition, ws, row, col, depthMax, formatConfig) {
    if (formatConfig.freezeHeader) {
        ws.row(row).freeze();
    }
    ws.cell(row, col, row, col + depthMax + formatConfig.order.length - 1).style(formatConfig.style.header);
    [headerDefinition].concat(definition).forEach(function (msgIeDefinitionElem) {
        var _a;
        _a = fillRow(msgIeDefinitionElem, ws, row, col, depthMax, formatConfig.order), row = _a[0], col = _a[1];
    });
    return [row, col];
}
function fillRow(elem, ws, row, col, depthMax, order) {
    order.forEach(function (field) {
        switch (field) {
            case 'ie/group name': {
                for (var i = 0; i < elem.depth; i++) {
                    ws.column(col++).setWidth(3);
                }
                ws.cell(row, col).string(elem['ie/group name']);
                ws.column(col++).setWidth(3);
                for (var i = elem.depth; i < depthMax; i++) {
                    ws.column(col++).setWidth(3);
                }
                ws.column(col - 1).setWidth(30);
                break;
            }
            case 'presence': {
                ws.cell(row, col++).string(elem.presence);
                break;
            }
            case 'range': {
                ws.cell(row, col++).string(elem.range);
                break;
            }
            case 'ie type and reference': {
                ws.cell(row, col++).string(elem['ie type and reference']);
                break;
            }
            case 'semantics description': {
                ws.cell(row, col++).string(elem['semantics description']);
                break;
            }
            case 'criticality': {
                if (elem.criticality) {
                    ws.cell(row, col).string(elem.criticality);
                }
                col++;
                break;
            }
            case 'assigned criticality': {
                if (elem['assigned criticiality']) {
                    ws.cell(row, col).string(elem['assigned criticiality']);
                }
                col++;
                break;
            }
        }
    });
    row++;
    col = 1;
    return [row, col];
}
function fillRange(range, ws, row, col, depthMax, formatConfig) {
    ws.cell(row, col, row, col + depthMax + 1).style(formatConfig.style.header);
    [headerRange].concat(range).forEach(function (rangeElem) {
        ws.cell(row, col, row).string(rangeElem['range bound']);
        ws.cell(row++, col + depthMax + 1).string(rangeElem.explanation);
        col = 1;
    });
    return [row, col];
}
function fillCondition(condition, ws, row, col, depthMax, formatConfig) {
    ws.cell(row, col, row, col + depthMax + 1).style(formatConfig.style.header);
    [headerCondition].concat(condition).forEach(function (conditionElem) {
        ws.cell(row, col).string(conditionElem.condition);
        ws.cell(row++, col + depthMax + 1).string(conditionElem.explanation);
        col = 1;
    });
    return [row, col];
}
if (require.main === module) {
    var _a = process.argv.slice(2), filePath_1 = _a[0], msgIeName_1 = _a[1], expand = _a[2];
    if (!filePath_1 || !msgIeName_1 || !expand) {
        throw Error('Requires 3 arguments, filePath, msgIeName and expand');
    }
    fs_1.readFile(filePath_1, 'utf8', function (err, html) {
        if (err) {
            throw err;
        }
        var fileName = path_1.parse(filePath_1);
        var definitions = parse_1.parse(html);
        var msgIeDefinitions = null;
        var wb = null;
        var outFileName = null;
        if (msgIeName_1 === 'all') {
            msgIeDefinitions = Object.keys(definitions).filter(function (key) {
                return typeof definitions[key] !== 'string';
            }).map(function (sectionNumber) {
                return definitions[sectionNumber];
            });
            outFileName = fileName.name + ".xlsx";
        }
        else {
            if (!(msgIeName_1 in definitions)) {
                throw Error("Definition for a given name " + msgIeName_1 + " is not found");
            }
            var sectionNumber = definitions[msgIeName_1];
            msgIeDefinitions = [definitions[sectionNumber]];
            outFileName = fileName.name + " " + msgIeName_1 + ".xlsx";
        }
        wb = format(msgIeDefinitions);
        wb.write(outFileName);
    });
}
