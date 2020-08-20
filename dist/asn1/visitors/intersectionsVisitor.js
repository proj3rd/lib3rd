"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const intersectionElementsVisitor_1 = require("./intersectionElementsVisitor");
/**
 * # Grammar
 * ```
 * intersections: (intersectionElements) (intersectionMark intersectionElements)*
 * ```
 */
class IntersectionsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const intersectionElementsCtxes = ctx.intersectionElements();
        return intersectionElementsCtxes.map((intersectionElementsCtx) => intersectionElementsCtx.accept(new intersectionElementsVisitor_1.IntersectionElementsVisitor()));
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.IntersectionsVisitor = IntersectionsVisitor;
//# sourceMappingURL=intersectionsVisitor.js.map