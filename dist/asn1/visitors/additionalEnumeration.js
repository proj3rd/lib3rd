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
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var enumeration_1 = require("./enumeration");
/**
 * ANTLR4 grammar
 * ```
 * additionalEnumeration : enumeration
 * ```
 */
var AdditionalEnumerationVisitor = /** @class */ (function (_super) {
    __extends(AdditionalEnumerationVisitor, _super);
    function AdditionalEnumerationVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdditionalEnumerationVisitor.prototype.defaultResult = function () {
        return [];
    };
    AdditionalEnumerationVisitor.prototype.visitChildren = function (additionalEnumerationCtx) {
        var enumerationCtx = additionalEnumerationCtx.children[0];
        return enumerationCtx.accept(new enumeration_1.EnumerationVisitor());
    };
    return AdditionalEnumerationVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.AdditionalEnumerationVisitor = AdditionalEnumerationVisitor;
