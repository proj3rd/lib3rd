"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const objectClassVisitor_1 = require("./objectClassVisitor");
/**
 * # Grammar
 * ```
 * objectClassAssignment: ASSIGN_OP objectClass
 * ```
 */
class ObjectClassAssignmentVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const objectClassCtx = ctx.objectClass();
        return objectClassCtx.accept(new objectClassVisitor_1.ObjectClassVisitor());
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ObjectClassAssignmentVisitor = ObjectClassAssignmentVisitor;
//# sourceMappingURL=objectClassAssignmentVisitor.js.map