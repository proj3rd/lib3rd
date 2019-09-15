"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const componentRelationConstraint_1 = require("./componentRelationConstraint");
/**
 * ANTLR4 grammar
 * ```
 * tableConstraint : componentRelationConstraint
 * ```
 */
class TableConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(tableConstraintCtx) {
        return tableConstraintCtx.children[0].accept(new componentRelationConstraint_1.ComponentRelationConstraintVisitor());
    }
}
exports.TableConstraintVisitor = TableConstraintVisitor;
