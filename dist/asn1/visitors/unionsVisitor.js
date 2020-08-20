"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const unions_1 = require("../classes/unions");
const intersectionsVisitor_1 = require("./intersectionsVisitor");
/**
 * # Grammar
 * ```
 * unions: (intersections) (unionMark intersections)*
 * ```
 */
class UnionsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const intersectionsCtxes = ctx.intersections();
        const intersectionsList = intersectionsCtxes.map((intersectionsCtx) => intersectionsCtx.accept(new intersectionsVisitor_1.IntersectionsVisitor()));
        return new unions_1.Unions(intersectionsList);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.UnionsVisitor = UnionsVisitor;
//# sourceMappingURL=unionsVisitor.js.map