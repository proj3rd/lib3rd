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
var Integer = /** @class */ (function (_super) {
    __extends(Integer, _super);
    function Integer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Integer.prototype.setConstraint = function (constraint) {
        if ('value' in constraint) {
            this.value = constraint.value;
            delete constraint.value;
            this.min = undefined;
            this.max = undefined;
        }
        if ('min' in constraint && 'max' in constraint) {
            this.min = constraint.min;
            delete constraint.min;
            this.max = constraint.max;
            delete constraint.max;
            this.value = undefined;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("Integer could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    Integer.prototype.expand = function (asn1Pool /* TODO */, moduleName) {
        return this;
    };
    Integer.prototype.depthMax = function () {
        return 0;
    };
    Integer.prototype.replaceParameters = function (paramterMapping) {
        // Do nothing
    };
    Integer.prototype.toString = function () {
        var valueConstraint = this.value !== undefined ? "(" + this.value + ")" :
            this.min !== undefined && this.max !== undefined ? "(" + this.min + ".." + this.max + ")" : '';
        return "INTEGER " + valueConstraint;
    };
    Integer.prototype.fillWorksheet = function (ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        if (depth === void 0) { depth = 0; }
        var _a;
        ieElem.type = this.toString();
        _a = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth), row = _a[0], col = _a[1];
        this.addToConstants(this.value, constants);
        this.addToConstants(this.min, constants);
        this.addToConstants(this.max, constants);
        return [row, col];
    };
    return Integer;
}(base_1.Base));
exports.Integer = Integer;
