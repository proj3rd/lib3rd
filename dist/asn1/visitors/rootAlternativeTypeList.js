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
var alternativeTypeList_1 = require("./alternativeTypeList");
/**
 * ANTLR4 grammar
 * ```
 * rootAlternativeTypeList  : alternativeTypeList
 * ```
 */
var RootAlternativeTypeListVisitor = /** @class */ (function (_super) {
    __extends(RootAlternativeTypeListVisitor, _super);
    function RootAlternativeTypeListVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RootAlternativeTypeListVisitor.prototype.defaultResult = function () {
        return [];
    };
    RootAlternativeTypeListVisitor.prototype.visitChildren = function (rootAlternativeTypeListCtx) {
        var alternativeTypeListCtx = rootAlternativeTypeListCtx.children[0];
        return alternativeTypeListCtx.accept(new alternativeTypeList_1.AlternativeTypeListVisitor());
    };
    return RootAlternativeTypeListVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.RootAlternativeTypeListVisitor = RootAlternativeTypeListVisitor;
