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
var asnType_1 = require("./asnType");
var BitString = /** @class */ (function (_super) {
    __extends(BitString, _super);
    function BitString() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BitString.prototype.setConstraint = function (constraint) {
        if ('value' in constraint) {
            this.size = constraint.value;
            delete constraint.value;
            this.sizeMin = undefined;
            this.sizeMax = undefined;
        }
        if ('min' in constraint && 'max' in constraint) {
            this.sizeMin = constraint.min;
            delete constraint.min;
            this.sizeMax = constraint.max;
            delete constraint.max;
            this.size = undefined;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("BitString could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    BitString.prototype.expand = function (asn1Pool /* TODO */, moduleName) {
        return this;
    };
    BitString.prototype.depthMax = function () {
        return 0;
    };
    BitString.prototype.replaceParameters = function (paramterMapping) {
        // Do nothing
    };
    BitString.prototype.toString = function () {
        var valueConstraint = this.size !== undefined ? "(SIZE (" + this.size + "))" :
            this.sizeMin !== undefined && this.sizeMax !== undefined ? "(SIZE (" + this.sizeMin + ".." + this.sizeMax + "))" : '';
        return "BIT STRING " + valueConstraint;
    };
    BitString.prototype.fillWorksheet = function (ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        var _a;
        if (depth === void 0) { depth = 0; }
        ieElem.type = this.toString();
        _a = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth), row = _a[0], col = _a[1];
        this.addToConstants(this.size, constants);
        this.addToConstants(this.sizeMin, constants);
        this.addToConstants(this.sizeMax, constants);
        return [row, col];
    };
    return BitString;
}(asnType_1.AsnType));
exports.BitString = BitString;
