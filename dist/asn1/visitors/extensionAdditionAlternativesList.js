"use strict";
exports.__esModule = true;
var extensionAdditionAlternative_1 = require("./extensionAdditionAlternative");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesList  : (extensionAdditionAlternative) (COMMA  extensionAdditionAlternative)*
 * ```
 */
var ExtensionAdditionAlternativesListVisitor = /** @class */ (function () {
    function ExtensionAdditionAlternativesListVisitor() {
    }
    ExtensionAdditionAlternativesListVisitor.prototype.visitChildren = function (extensionAdditionAlternativesListCtx) {
        var extensionAdditionAlternativesList = [];
        var childCtxes = extensionAdditionAlternativesListCtx.children;
        childCtxes.forEach(function (childCtx, index) {
            if (index % 2) {
                return;
            }
            extensionAdditionAlternativesList.push(childCtx.accept(new extensionAdditionAlternative_1.ExtensionAdditionAlternativeVisitor()));
        });
        return extensionAdditionAlternativesList;
    };
    return ExtensionAdditionAlternativesListVisitor;
}());
exports.ExtensionAdditionAlternativesListVisitor = ExtensionAdditionAlternativesListVisitor;
