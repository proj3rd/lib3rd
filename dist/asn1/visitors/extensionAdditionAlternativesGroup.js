"use strict";
exports.__esModule = true;
var extensionAdditionAlternativesGroup_1 = require("../classes/extensionAdditionAlternativesGroup");
var alternativeTypeList_1 = require("./alternativeTypeList");
var versionNumber_1 = require("./versionNumber");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesGroup  :  DOUBLE_L_BRACKET  versionNumber  alternativeTypeList  DOUBLE_R_BRACKET
 * ```
 */
var ExtensionAdditionAlternativesGroupVisitor = /** @class */ (function () {
    function ExtensionAdditionAlternativesGroupVisitor() {
    }
    ExtensionAdditionAlternativesGroupVisitor.prototype.visitChildren = function (extensionAdditionAlternativesGroupCtx) {
        var childCtxes = extensionAdditionAlternativesGroupCtx.children;
        var versionNumberCtx = childCtxes[1];
        var alternativeTypeListCtx = childCtxes[2];
        var versionNumber = versionNumberCtx.accept(new versionNumber_1.VersionNumberVisitor());
        var alternativeTypeList = alternativeTypeListCtx.accept(new alternativeTypeList_1.AlternativeTypeListVisitor());
        return new extensionAdditionAlternativesGroup_1.ExtensionAdditionAlternativesGroup(alternativeTypeList, versionNumber);
    };
    return ExtensionAdditionAlternativesGroupVisitor;
}());
exports.ExtensionAdditionAlternativesGroupVisitor = ExtensionAdditionAlternativesGroupVisitor;
