"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConstraintVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const constraint_1 = require("../classes/constraint");
const constraintSpecVisitor_1 = require("./constraintSpecVisitor");
/**
 * # Grammar
 * ```
 * constraint: L_PARAN constraintSpec exceptionSpec? R_PARAN
 * ```
 */
class ConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const constraintSpecCtx = ctx.constraintSpec();
        const constraint = constraintSpecCtx.accept(new constraintSpecVisitor_1.ConstraintSpecVisitor());
        const exceptionSpecCtx = ctx.exceptionSpec();
        if (exceptionSpecCtx !== undefined) {
            unimpl_1.unimpl(ctx.text);
        }
        return new constraint_1.Constraint(constraint);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ConstraintVisitor = ConstraintVisitor;
//# sourceMappingURL=constraintVisitor.js.map