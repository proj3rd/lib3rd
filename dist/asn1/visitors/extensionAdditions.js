"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const extensionAdditionList_1 = require("./extensionAdditionList");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditions  :  (COMMA  extensionAdditionList)?
 * ```
 */
class ExtensionAdditionsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(extensionAdditionsCtx) {
        const childCtxes = extensionAdditionsCtx.children;
        let extensionAdditions = [];
        if (childCtxes) {
            const extensionAdditionListCtx = childCtxes[1];
            extensionAdditions = extensionAdditionListCtx.accept(new extensionAdditionList_1.ExtensionAdditionListVisitor());
        }
        return extensionAdditions;
    }
}
exports.ExtensionAdditionsVisitor = ExtensionAdditionsVisitor;
