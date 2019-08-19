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
Object.defineProperty(exports, "__esModule", { value: true });
var lodash_1 = require("lodash");
var logging_1 = require("../../utils/logging");
var xlsx_1 = require("../format/xlsx");
var base_1 = require("./base");
var Sequence = /** @class */ (function (_super) {
    __extends(Sequence, _super);
    function Sequence(items /* TODO */) {
        var _this = _super.call(this) || this;
        _this.items = items;
        return _this;
    }
    Sequence.prototype.setConstraint = function (constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("Sequence could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    Sequence.prototype.expand = function (asn1Pool /* TODO */, moduleName, parameterList) {
        var _this = this;
        if (parameterList === void 0) { parameterList = []; }
        this.items.forEach(function (item) {
            item.expand(asn1Pool, _this.getModuleNameToPass(moduleName), parameterList);
        });
        return this;
    };
    Sequence.prototype.depthMax = function () {
        var depthMax = 0;
        this.items.forEach(function (item) {
            depthMax = Math.max(depthMax, item.depthMax() + 1);
        });
        return depthMax;
    };
    Sequence.prototype.replaceParameters = function (parameterMapping) {
        this.items.forEach(function (item) {
            item.replaceParameters(parameterMapping);
        });
    };
    Sequence.prototype.toString = function () {
        var _this = this;
        if (!this.items.length) {
            return 'SEQUENCE {}';
        }
        var itemString = [];
        this.items.forEach(function (item, index) {
            var comma = index < _this.items.length - 1 ? ',' : '';
            var tag = item.tag;
            var tagString = tag ? "    " + tag : '';
            itemString.push("" + _this.indent(item.toString()) + comma + tagString);
        });
        return [
            'SEQUENCE {',
            itemString.join('\n'),
            '}',
        ].join('\n');
    };
    Sequence.prototype.fillWorksheet = function (ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        if (depth === void 0) { depth = 0; }
        var _a;
        ieElem.type = 'SEQUENCE';
        _a = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth), row = _a[0], col = _a[1];
        this.items.forEach(function (item) {
            var _a;
            _a = item.fillWorksheet({}, ws, row, col, depthMax, constants, formatConfig, depth + 1), row = _a[0], col = _a[1];
        });
        return [row, col];
    };
    return Sequence;
}(base_1.Base));
exports.Sequence = Sequence;
