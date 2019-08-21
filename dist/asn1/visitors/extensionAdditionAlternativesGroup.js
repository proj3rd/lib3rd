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
var extensionAdditionAlternativesGroup_1 = require("../classes/extensionAdditionAlternativesGroup");
var alternativeTypeList_1 = require("./alternativeTypeList");
var versionNumber_1 = require("./versionNumber");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesGroup  :  DOUBLE_L_BRACKET  versionNumber  alternativeTypeList  DOUBLE_R_BRACKET
 * ```
 */
var ExtensionAdditionAlternativesGroupVisitor = /** @class */ (function (_super) {
    __extends(ExtensionAdditionAlternativesGroupVisitor, _super);
    function ExtensionAdditionAlternativesGroupVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionAdditionAlternativesGroupVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ExtensionAdditionAlternativesGroupVisitor.prototype.visitChildren = function (extensionAdditionAlternativesGroupCtx) {
        var childCtxes = extensionAdditionAlternativesGroupCtx.children;
        var versionNumberCtx = childCtxes[1];
        var alternativeTypeListCtx = childCtxes[2];
        var versionNumber = versionNumberCtx.accept(new versionNumber_1.VersionNumberVisitor());
        var alternativeTypeList = alternativeTypeListCtx.accept(new alternativeTypeList_1.AlternativeTypeListVisitor());
        return new extensionAdditionAlternativesGroup_1.ExtensionAdditionAlternativesGroup(alternativeTypeList, versionNumber);
    };
    return ExtensionAdditionAlternativesGroupVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ExtensionAdditionAlternativesGroupVisitor = ExtensionAdditionAlternativesGroupVisitor;
