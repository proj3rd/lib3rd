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
var SequenceOf = /** @class */ (function (_super) {
    __extends(SequenceOf, _super);
    function SequenceOf(type) {
        var _this = _super.call(this) || this;
        _this.type = type;
        return _this;
    }
    SequenceOf.prototype.setConstraint = function (constraint) {
        if ('value' in constraint) {
            this.size = constraint.value;
            delete constraint.value;
            this.sizeMin = null;
            this.sizeMax = null;
        }
        if ('min' in constraint && 'max' in constraint) {
            this.size = null;
            this.sizeMin = constraint.min;
            delete constraint.min;
            this.sizeMax = constraint.max;
            delete constraint.max;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("SequenceOf could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    SequenceOf.prototype.expand = function (asn1Pool /* TODO */, moduleName, parameterList) {
        if (parameterList === void 0) { parameterList = []; }
        var typeToExpand = lodash_1.cloneDeep(this.type);
        this.expandedType = typeToExpand.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        return this;
    };
    SequenceOf.prototype.depthMax = function () {
        if (this.expandedType) {
            return this.expandedType.depthMax() + 1;
        }
        return 0;
    };
    SequenceOf.prototype.toString = function () {
        var size = this.size !== null ? " (SIZE (" + this.size + "))" :
            this.sizeMin !== null && this.sizeMax !== null ? " (SIZE (" + this.sizeMin + ".." + this.sizeMax + "))" : '';
        return "SEQUENCE" + size + " OF " + (this.expandedType ? this.expandedType.toString() : this.type.toString());
    };
    SequenceOf.prototype.toStringUnexpanded = function () {
        var size = this.size !== null ? " (SIZE (" + this.size + "))" :
            this.sizeMin !== null && this.sizeMax !== null ? " (SIZE (" + this.sizeMin + ".." + this.sizeMax + "))" : '';
        return "SEQUENCE" + size + " OF " + this.type.toString();
    };
    SequenceOf.prototype.fillWorksheet = function (ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        if (depth === void 0) { depth = 0; }
        var _a, _b;
        ieElem.type = this.toStringUnexpanded();
        _a = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth), row = _a[0], col = _a[1];
        this.addToConstants(this.size, constants);
        this.addToConstants(this.sizeMin, constants);
        this.addToConstants(this.sizeMax, constants);
        if (this.expandedType) {
            _b = this.expandedType.fillWorksheet({ ie: this.type.toString() }, ws, row, col, depthMax, constants, formatConfig, depth + 1), row = _b[0], col = _b[1];
        }
        return [row, col];
    };
    return SequenceOf;
}(base_1.Base));
exports.SequenceOf = SequenceOf;
