"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const elementsVisitor_1 = require("./elementsVisitor");
/**
 * # Grammar
 * ```
 * intersectionElements: elements (exclusions)?
 * ```
 */
class IntersectionElementsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const elementsCtx = ctx.elements();
        const elements = elementsCtx.accept(new elementsVisitor_1.ElementsVisitor());
        const exclusionsCtx = ctx.exclusions();
        if (exclusionsCtx !== undefined) {
            unimpl_1.unimpl();
        }
        return elements;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.IntersectionElementsVisitor = IntersectionElementsVisitor;
//# sourceMappingURL=intersectionElementsVisitor.js.map