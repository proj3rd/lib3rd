"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const extensionAdditionListVisitor_1 = require("./extensionAdditionListVisitor");
/**
 * #  Grammar
 * ```
 * extensionAdditions: (COMMA extensionAdditionList)?
 * ```
 */
class ExtensionAdditionsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const extensionAdditionListCtx = ctx.extensionAdditionList();
        if (extensionAdditionListCtx !== undefined) {
            return extensionAdditionListCtx.accept(new extensionAdditionListVisitor_1.ExtensionAdditionListVisitor());
        }
        return [];
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ExtensionAdditionsVisitor = ExtensionAdditionsVisitor;
//# sourceMappingURL=extensionAdditionsVisitor.js.map