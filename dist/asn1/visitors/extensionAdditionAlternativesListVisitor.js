"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const extensionAdditionAlternativeVisitor_1 = require("./extensionAdditionAlternativeVisitor");
/**
 * # Grammar
 * ```
 * extensionAdditionAlternativesList: (extensionAdditionAlternative) (COMMA extensionAdditionAlternative)*
 * ```
 */
class ExtensionAdditionAlternativesListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const extensionAdditionAlternativeCtxes = ctx.extensionAdditionAlternative();
        return extensionAdditionAlternativeCtxes.map((extensionAdditionAlternativeCtx) => extensionAdditionAlternativeCtx.accept(new extensionAdditionAlternativeVisitor_1.ExtensionAdditionAlternativeVisitor()));
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ExtensionAdditionAlternativesListVisitor = ExtensionAdditionAlternativesListVisitor;
//# sourceMappingURL=extensionAdditionAlternativesListVisitor.js.map