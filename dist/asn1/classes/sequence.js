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
    Sequence.prototype.expand = function () {
        // TODO
        return this;
    };
    Sequence.prototype.depthMax = function () {
        var depthMax = 1;
        this.items.forEach(function (item) {
            depthMax = Math.max(depthMax, item.depthMax() + 1);
        });
        return depthMax;
    };
    Sequence.prototype.toString = function () {
        var _this = this;
        // TODO
        return !this.items.length ? 'SEQUENCE {}' : [
            'SEQUENCE {',
            this.items.map(function (item) { return _this.indent(item.toString()); }).join(',\n'),
            '}',
        ].join('\n');
    };
    Sequence.prototype.fillWorksheet = function (ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
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
