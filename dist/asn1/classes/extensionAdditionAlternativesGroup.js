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
var base_1 = require("./base");
var ExtensionAdditionAlternativesGroup = /** @class */ (function (_super) {
    __extends(ExtensionAdditionAlternativesGroup, _super);
    function ExtensionAdditionAlternativesGroup(alternativeTypeList, versionNumber) {
        var _this = _super.call(this) || this;
        _this.alternativeTypeList = alternativeTypeList;
        if (versionNumber !== undefined && versionNumber !== null) {
            logging_1.log.warn('ExtensionAdditionAlternativesGroup could not handle versionNumber');
        }
        return _this;
    }
    ExtensionAdditionAlternativesGroup.prototype.setConstraint = function (constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("ExtensionAdditionAlternativesGroup could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    ExtensionAdditionAlternativesGroup.prototype.expand = function () {
        // TODO
        return this;
    };
    ExtensionAdditionAlternativesGroup.prototype.depthMax = function () {
        var depthMax = 1;
        this.alternativeTypeList.forEach(function (item) {
            depthMax = Math.max(depthMax, item.depthMax() + 1);
        });
        return depthMax;
    };
    ExtensionAdditionAlternativesGroup.prototype.toString = function () {
        var _this = this;
        return [
            '[[',
            this.alternativeTypeList.map(function (item) { return _this.indent(item.toString()); }).join(',\n'),
            ']]',
        ].join('\n');
    };
    return ExtensionAdditionAlternativesGroup;
}(base_1.Base));
exports.ExtensionAdditionAlternativesGroup = ExtensionAdditionAlternativesGroup;