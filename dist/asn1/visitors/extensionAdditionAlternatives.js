"use strict";
exports.__esModule = true;
var extensionAdditionAlternativesList_1 = require("./extensionAdditionAlternativesList");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternatives  : (COMMA  extensionAdditionAlternativesList )?
 * ```
 */
var ExtensionAdditionAlternativesVisitor = /** @class */ (function () {
    function ExtensionAdditionAlternativesVisitor() {
    }
    ExtensionAdditionAlternativesVisitor.prototype.visitChildren = function (extensionAdditionAlternativesCtx) {
        var extensionAdditionAlternatives = [];
        if (extensionAdditionAlternativesCtx.children) {
            var extensionAdditionAlternativesListCtx = extensionAdditionAlternativesCtx.children[1];
            extensionAdditionAlternatives =
                extensionAdditionAlternativesListCtx.accept(new extensionAdditionAlternativesList_1.ExtensionAdditionAlternativesListVisitor());
        }
        return extensionAdditionAlternatives;
    };
    return ExtensionAdditionAlternativesVisitor;
}());
exports.ExtensionAdditionAlternativesVisitor = ExtensionAdditionAlternativesVisitor;
