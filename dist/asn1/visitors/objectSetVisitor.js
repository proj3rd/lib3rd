"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const objectSet_1 = require("../classes/objectSet");
const objectSetSpecVisitor_1 = require("./objectSetSpecVisitor");
/**
 * # Grammar
 * ```
 * objectSet: L_BRACE objectSetSpec R_BRACE
 * ```
 */
class ObjectSetVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const objectSetSpecCtx = ctx.objectSetSpec();
        const objectSetSpec = objectSetSpecCtx.accept(new objectSetSpecVisitor_1.ObjectSetSpecVisitor());
        return new objectSet_1.ObjectSet(objectSetSpec);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ObjectSetVisitor = ObjectSetVisitor;
//# sourceMappingURL=objectSetVisitor.js.map