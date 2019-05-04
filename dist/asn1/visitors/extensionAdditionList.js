"use strict";
exports.__esModule = true;
var extensionAddition_1 = require("./extensionAddition");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionList  :  (extensionAddition) (COMMA  extensionAddition)*
 * ```
 */
var ExtensionAdditionListVisitor = /** @class */ (function () {
    function ExtensionAdditionListVisitor() {
    }
    ExtensionAdditionListVisitor.prototype.visitChildren = function (extensionAdditionListCtx) {
        var childCtxes = extensionAdditionListCtx.children;
        var extensionAdditionList = [];
        childCtxes.forEach(function (childCtx, index) {
            if (index % 2) {
                return;
            }
            extensionAdditionList.push(childCtx.accept(new extensionAddition_1.ExtensionAdditionVisitor()));
        });
    };
    return ExtensionAdditionListVisitor;
}());
exports.ExtensionAdditionListVisitor = ExtensionAdditionListVisitor;
