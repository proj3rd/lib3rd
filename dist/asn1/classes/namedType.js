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
var base_1 = require("./base");
var NamedType = /** @class */ (function (_super) {
    __extends(NamedType, _super);
    function NamedType(name, type) {
        var _this = _super.call(this) || this;
        _this.name = name;
        _this.type = type;
        return _this;
    }
    NamedType.prototype.setConstraint = function (constraint) {
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("NamedType could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    NamedType.prototype.expand = function (asn1Pool /* TODO */, moduleName, parameterList) {
        if (parameterList === void 0) { parameterList = []; }
        var expandedType = this.type.expand(asn1Pool, this.getModuleNameToPass(moduleName), parameterList);
        this.type = expandedType;
        return this;
    };
    NamedType.prototype.depthMax = function () {
        return this.type.depthMax();
    };
    NamedType.prototype.replaceParameters = function (parameterMapping) {
        this.type.replaceParameters(parameterMapping);
    };
    NamedType.prototype.toString = function () {
        return this.name.padEnd(48) + "    " + this.type + this.getOptionalString();
    };
    NamedType.prototype.fillWorksheet = function (ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        var _a;
        if (depth === void 0) { depth = 0; }
        ieElem.ie = this.name;
        var moduleReference = this /* TODO */.type.moduleReference;
        var typeReference = this /* TOdO */.type.typeReference;
        ieElem.reference = "" + (moduleReference ? moduleReference + '.' : '') + (typeReference ? typeReference : '');
        ieElem.optional = this.getOptionalString();
        var tag = this.tag;
        ieElem.tag = tag ? tag.replace(/^-- *?/, '') : '';
        _a = this.type.fillWorksheet(ieElem, ws, row, col, depthMax, constants, formatConfig, depth), row = _a[0], col = _a[1];
        return [row, col];
    };
    NamedType.prototype.getOptionalString = function () {
        return this.optional ? '    OPTIONAL' :
            this.default !== undefined ? "    DEFAULT    " + this.default.toString() : '';
    };
    return NamedType;
}(base_1.Base));
exports.NamedType = NamedType;
