"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const objectClass_1 = require("./objectClass");
/**
 * ANTLR4 grammar
 * ```
 * objectClassAssignment : ASSIGN_OP objectClass
 * ```
 */
class ObjectClassAssignmentVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(objectClassAssignmentCtx) {
        const objectClassCtx = objectClassAssignmentCtx.children[1];
        return objectClassCtx.accept(new objectClass_1.ObjectClassVisitor());
    }
}
exports.ObjectClassAssignmentVisitor = ObjectClassAssignmentVisitor;
