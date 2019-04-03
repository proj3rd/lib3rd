"use strict";
exports.__esModule = true;
var xl = require("excel4node");
var formatConfigDefault = {
    order: ['ie/group name', 'presence', 'range', 'ie type and reference', 'semantics description',
        'criticality', 'assigned criticality'],
    showRange: true,
    showCondition: true,
    grouping: true,
    freezeHeader: true
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
        var _d = [1, 1], row = _d[0], col = _d[1];
        ws.cell(row++, col).string(msgIeDefinition.name);
        if (msgIeDefinition.description) {
            ws.cell(row++, col).string(msgIeDefinition.description);
        }
        if (msgIeDefinition.direction) {
            ws.cell(row++, col).string("Direction: " + msgIeDefinition.direction);
        }
        row++;
        _a = fillDefinition(msgIeDefinition.definition, ws, row, col, formatConfig), row = _a[0], col = _a[1];
        if (msgIeDefinition.range && formatConfig.showRange) {
            row++;
            _b = fillRange(msgIeDefinition.range, ws, row, col), row = _b[0], col = _b[1];
        }
        if (msgIeDefinition.condition && formatConfig.showCondition) {
            row++;
            _c = fillCondition(msgIeDefinition.condition, ws, row, col), row = _c[0], col = _c[1];
        }
    });
    return wb;
}
exports.format = format;
function sheetname(msgIeDefinition) {
    return (msgIeDefinition.section + msgIeDefinition.name).substr(0, 31);
}
function fillDefinition(definition, ws, row, col, formatConfig) {
    var _a;
    var depthMax = definition.reduce(function (prevDepth, currElem) {
        return Math.max(prevDepth, currElem.depth);
    }, 0);
    if (formatConfig.freezeHeader) {
        ws.row(row).freeze();
    }
    _a = fillRow(headerDefinition, ws, row, col, depthMax, formatConfig.order), row = _a[0], col = _a[1];
    definition.forEach(function (msgIeDefinitionElem) {
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
                    col++;
                }
                ws.cell(row, col++).string(elem['ie/group name']);
                for (var i = elem.depth; i < depthMax; i++) {
                    col++;
                }
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
                ws.cell(row, col++).string(elem.criticality);
                break;
            }
            case 'assigned criticality': {
                ws.cell(row, col++).string(elem['assigned criticiality']);
                break;
            }
        }
    });
    row++;
    col = 1;
    return [row, col];
}
function fillRange(range, ws, row, col) {
    return [row, col];
}
function fillCondition(condition, ws, row, col) {
    return [row, col];
}
