"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const asnType_1 = require("./asnType");
/**
 * ANTLR4 grammar
 * ```
 * typeAssignment :
 *       ASSIGN_OP
 *       asnType
 * ```
 */
class TypeAssignmentVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(typeAssignmentCtx) {
        return typeAssignmentCtx.children[1].accept(new asnType_1.AsnTypeVisitor());
    }
}
exports.TypeAssignmentVisitor = TypeAssignmentVisitor;
