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
            var extensionAddition = childCtx.accept(new extensionAddition_1.ExtensionAdditionVisitor());
            extensionAdditionList.splice.apply(extensionAdditionList, [extensionAdditionList.length, 0].concat(extensionAddition));
        });
        return extensionAdditionList;
    };
    return ExtensionAdditionListVisitor;
}());
exports.ExtensionAdditionListVisitor = ExtensionAdditionListVisitor;
