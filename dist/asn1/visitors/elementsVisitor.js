"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementsVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
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