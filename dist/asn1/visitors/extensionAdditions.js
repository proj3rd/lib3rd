"use strict";
exports.__esModule = true;
var extensionAdditionList_1 = require("./extensionAdditionList");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditions  :  (COMMA  extensionAdditionList)?
 * ```
 */
var ExtensionAdditionsVisitor = /** @class */ (function () {
    function ExtensionAdditionsVisitor() {
    }
    ExtensionAdditionsVisitor.prototype.visitChildren = function (extensionAdditionsCtx) {
        var childCtxes = extensionAdditionsCtx.children;
        var extensionAdditions = [];
        if (childCtxes) {
            var extensionAdditionListCtx = childCtxes[1];
            extensionAdditions = extensionAdditionListCtx.accept(new extensionAdditionList_1.ExtensionAdditionListVisitor());
        }
        return extensionAdditions;
    };
    return ExtensionAdditionsVisitor;
}());
exports.ExtensionAdditionsVisitor = ExtensionAdditionsVisitor;
