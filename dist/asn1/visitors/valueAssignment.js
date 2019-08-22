"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * valueAssignment :
 *       asnType
 * 	   ASSIGN_OP
 *        value
 * ```
 */
class ValueAssignmentVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(valueAssignmentCtx) {
        const valueCtx = valueAssignmentCtx.children[2];
        return valueCtx.accept(new value_1.ValueVisitor());
    }
}
exports.ValueAssignmentVisitor = ValueAssignmentVisitor;
