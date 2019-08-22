"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const extensionAdditionAlternative_1 = require("./extensionAdditionAlternative");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesList  : (extensionAdditionAlternative) (COMMA  extensionAdditionAlternative)*
 * ```
 */
class ExtensionAdditionAlternativesListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(extensionAdditionAlternativesListCtx) {
        const extensionAdditionAlternativesList = [];
        const childCtxes = extensionAdditionAlternativesListCtx.children;
        childCtxes.forEach((childCtx, index) => {
            if (index % 2) {
                return;
            }
            extensionAdditionAlternativesList.push(childCtx.accept(new extensionAdditionAlternative_1.ExtensionAdditionAlternativeVisitor()));
        });
        return extensionAdditionAlternativesList;
    }
}
exports.ExtensionAdditionAlternativesListVisitor = ExtensionAdditionAlternativesListVisitor;
