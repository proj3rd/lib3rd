"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeAssignmentVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const nullType_1 = require("../classes/nullType");
const asnTypeVisitor_1 = require("./asnTypeVisitor");
/**
 * # Grammar
 * ```
 * typeAssignment: ASSIGN_OP asnType
 * ```
 */
class TypeAssignmentVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const asnTypeCtx = ctx.asnType();
        return asnTypeCtx.accept(new asnTypeVisitor_1.AsnTypeVisitor());
    }
    defaultResult() {
        return new nullType_1.NullType();
    }
}
exports.TypeAssignmentVisitor = TypeAssignmentVisitor;
//# sourceMappingURL=typeAssignmentVisitor.js.map