"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssignmentListVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const assignmentVisitor_1 = require("./assignmentVisitor");
/**
 * # Grammar
 * ```
 * assignmentList: (assignment) (assignment)*
 * ```
 */
class AssignmentListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const assignmentCtxes = ctx.assignment();
        return assignmentCtxes.map((assignmentCtx) => assignmentCtx.accept(new assignmentVisitor_1.AssignmentVisitor()));
    }
    defaultResult() {
        return [];
    }
}
exports.AssignmentListVisitor = AssignmentListVisitor;
//# sourceMappingURL=assignmentListVisitor.js.map