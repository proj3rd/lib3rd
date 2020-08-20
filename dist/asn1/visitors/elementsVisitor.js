"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const subtypeElementsVisitor_1 = require("./subtypeElementsVisitor");
/**
 * # Grammar
 * ```
 * elements: subtypeElements
 * ```
 */
class ElementsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const subtypeElementsCtx = ctx.subtypeElements();
        return subtypeElementsCtx.accept(new subtypeElementsVisitor_1.SubtypeElementsVisitor());
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ElementsVisitor = ElementsVisitor;
//# sourceMappingURL=elementsVisitor.js.map