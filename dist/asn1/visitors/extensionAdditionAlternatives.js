"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const extensionAdditionAlternativesList_1 = require("./extensionAdditionAlternativesList");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternatives  : (COMMA  extensionAdditionAlternativesList )?
 * ```
 */
class ExtensionAdditionAlternativesVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(extensionAdditionAlternativesCtx) {
        let extensionAdditionAlternatives = [];
        if (extensionAdditionAlternativesCtx.children) {
            const extensionAdditionAlternativesListCtx = extensionAdditionAlternativesCtx.children[1];
            extensionAdditionAlternatives =
                extensionAdditionAlternativesListCtx.accept(new extensionAdditionAlternativesList_1.ExtensionAdditionAlternativesListVisitor());
        }
        return extensionAdditionAlternatives;
    }
}
exports.ExtensionAdditionAlternativesVisitor = ExtensionAdditionAlternativesVisitor;
