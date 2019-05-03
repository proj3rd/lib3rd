"use strict";
exports.__esModule = true;
var extensionAdditionGroup_1 = require("../classes/extensionAdditionGroup");
var componentTypeList_1 = require("./componentTypeList");
var versionNumber_1 = require("./versionNumber");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionGroup  :  DOUBLE_L_BRACKET  versionNumber  componentTypeList  DOUBLE_R_BRACKET
 * ```
 */
var ExtensionAdditionGroupVisitor = /** @class */ (function () {
    function ExtensionAdditionGroupVisitor() {
    }
    ExtensionAdditionGroupVisitor.prototype.visitChildren = function (extensionAdditionGroupCtx) {
        var childCtxes = extensionAdditionGroupCtx.children;
        var versionNumberCtx = childCtxes[1];
        var versionNumber = versionNumberCtx.accept(new versionNumber_1.VersionNumberVisitor());
        var componentTypeListCtx = childCtxes[2];
        var componentTypeList = componentTypeListCtx.accept(new componentTypeList_1.ComponentTypeListVisitor());
        return new extensionAdditionGroup_1.ExtensionAdditionGroup(componentTypeList, versionNumber);
    };
    return ExtensionAdditionGroupVisitor;
}());
exports.ExtensionAdditionGroupVisitor = ExtensionAdditionGroupVisitor;
