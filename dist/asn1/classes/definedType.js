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
var utils_1 = require("../utils");
var base_1 = require("./base");
var withComponents_1 = require("./withComponents");
var DefinedType = /** @class */ (function (_super) {
    __extends(DefinedType, _super);
    function DefinedType() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DefinedType.prototype.setConstraint = function (constraint) {
        if ('withComponents' in constraint) {
            this.withComponents = new withComponents_1.WithComponents(constraint.withComponents);
            delete constraint.withComponents;
        }
        if (!lodash_1.isEmpty(constraint)) {
            logging_1.log.warn("DefinedType could not handle constraint " + JSON.stringify(constraint));
        }
        return this;
    };
    DefinedType.prototype.expand = function (asn1Pool /* TODO*/, moduleName) {
        var definition = utils_1.findDefinition(this.typeReference, moduleName, asn1Pool);
        if (!definition) {
            return this;
        }
        Object.assign(definition, { moduleReference: this.moduleReference, typeReference: this.typeReference });
        definition.expand(asn1Pool, this.getModuleNameToPass(moduleName));
        return definition;
    };
    DefinedType.prototype.depthMax = function () {
        return 0;
    };
    DefinedType.prototype.toString = function () {
        var withComponents = !this.withComponents ? '' :
            " (WITH COMPONENTS " + this.withComponents.toString();
        return "" + (this.moduleReference ? this.moduleReference + '.' : '') + this.typeReference + withComponents;
    };
    DefinedType.prototype.fillWorksheet = function (ieElem, ws, row, col, depthMax, constants, formatConfig, depth) {
        if (depth === void 0) { depth = 0; }
        var _a;
        ieElem.reference = this.toString();
        _a = xlsx_1.fillRow(ieElem, ws, row, col, depthMax, formatConfig, depth), row = _a[0], col = _a[1];
        return [row, col];
    };
    return DefinedType;
}(base_1.Base));
exports.DefinedType = DefinedType;
