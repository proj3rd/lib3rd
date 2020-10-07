"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const extensionAdditionAlternativesListVisitor_1 = require("./extensionAdditionAlternativesListVisitor");
/**
 * # Grammar
 * ```
 * extensionAdditionAlternatives: (COMMA extensionAdditionAlternativesList)?
 * ```
 */
class ExtensionAdditionAlternativesVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const extensionAdditionAlternativesListCtx = ctx.extensionAdditionAlternativesList();
        if (extensionAdditionAlternativesListCtx === undefined) {
            return [];
        }
        return extensionAdditionAlternativesListCtx.accept(new extensionAdditionAlternativesListVisitor_1.ExtensionAdditionAlternativesListVisitor());
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ExtensionAdditionAlternativesVisitor = ExtensionAdditionAlternativesVisitor;
//# sourceMappingURL=extensionAdditionAlternativesVisitor.js.map