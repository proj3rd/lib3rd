"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const objIdComponentsVisitor_1 = require("./objIdComponentsVisitor");
/**
 * # Grammar
 * ```
 * objIdComponentsList: (objIdComponents) (objIdComponents)*
 * ```
 */
class ObjIdComponentsListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const objIdComponentsCtxes = ctx.objIdComponents();
        const objIdComponentsList = objIdComponentsCtxes.map((objIdComponentsCtx) => objIdComponentsCtx.accept(new objIdComponentsVisitor_1.ObjIdComponentsVisitor()));
        return objIdComponentsList;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ObjIdComponentsListVisitor = ObjIdComponentsListVisitor;
//# sourceMappingURL=objIdComponentsListVisitor.js.map