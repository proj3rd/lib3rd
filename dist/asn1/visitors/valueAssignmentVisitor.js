"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const asnTypeVisitor_1 = require("./asnTypeVisitor");
const valueVisitor_1 = require("./valueVisitor");
/**
 * # Grammar
 * ```
 * valueAssignment: asnType ASSIGN_OP value
 * ```
 */
class ValueAssignmentVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const asnTypeCtx = ctx.asnType();
        const asnType = asnTypeCtx.accept(new asnTypeVisitor_1.AsnTypeVisitor());
        const valueCtx = ctx.value();
        const value = valueCtx.accept(new valueVisitor_1.ValueVisitor());
        return { asnType, value };
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ValueAssignmentVisitor = ValueAssignmentVisitor;
//# sourceMappingURL=valueAssignmentVisitor.js.map