"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var lodash_1 = require("lodash");
var logging_1 = require("../../utils/logging");
var xlsx_1 = require("../format/xlsx");
var base_1 = require("./base");
var ExtensionAdditionGroup = /** @class */ (function (_super) {
    __extends(ExtensionAdditionGroup, _super);
    function ExtensionAdditionGroup(alternativeTypeList, versionNumber) {
        var _this = _super.call(this) || this;
        _this.componentTypeList = alternativeTypeList;
        if (versionNumber !== undefined && versionNumber !== null) {
            logging_1.log.warn('ExtensionAdditionGroup could not handle versionNumber');
        }
        return _this;
    }
    ExtensionAdditionGroup.prototype.setConstraint = function (constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("ExtensionAdditionGroup could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    ExtensionAdditionGroup.prototype.expand = function (asn1Pool /* TODO */, moduleName, parameterList) {
        var _this = this;
        if (parameterList === void 0) { parameterList = []; }
        this.componentTypeList.forEach(function (item) {
            item.expand(asn1Pool, _this.getModuleNameToPass(moduleName), parameterList);
        });
        return this;
    };
    ExtensionAdditionGroup.prototype.depthMax = function () {
        var depthMax = 0;
        this.componentTypeList.forEach(function (item) {
            depthMax = Math.max(depthMax, item.depthMax() + 1);
        });
        return depthMax;
    };
    ExtensionAdditionGroup.prototype.replaceParameters = function (paramterMapping) {
        this.componentTypeList.forEach(function (item) {
            item.replaceParameters(paramterMapping);
        });
    };
    ExtensionAdditionGroup.prototype.toString = function () {
        var _this = this;
        var itemString = [];
        this.componentTypeList.forEach(function (item, index) {
            var comma = index < _this.componentTypeList.length - 1 ? ',' : '';
            var tag = item.tag;
            var tagString = tag ? "    " + tag : '';
            itemString.push("" + _this.indent(item.toString()) + comma + tagString);
        });
        return [
            '[[',
            itemString.join('\n'),
            ']]',
        ].join('\n');
    };
    ExtensionAdditionGroup.prototype.fillWorksheet = function (ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        if (depth === void 0) { depth = 0; }
        var _a, _b;
        ieElem.ie = '[[';
        _a = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth), row = _a[0], col = _a[1];
        this.componentTypeList.forEach(function (componentType) {
            var _a;
            _a = componentType.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1), row = _a[0], col = _a[1];
        });
        ieElem.ie = ']]';
        _b = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth), row = _b[0], col = _b[1];
        return [row, col];
    };
    return ExtensionAdditionGroup;
}(base_1.Base));
exports.ExtensionAdditionGroup = ExtensionAdditionGroup;
