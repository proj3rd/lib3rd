"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TableConstraintVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const componentRelationConstraintVisitor_1 = require("./componentRelationConstraintVisitor");
/**
 * # Grammar
 * ```
 * tableConstraint: componentRelationConstraint
 * ```
 */
class TableConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const componentRelationConstraintCtx = ctx.componentRelationConstraint();
        return componentRelationConstraintCtx.accept(new componentRelationConstraintVisitor_1.ComponentRelationConstraintVisitor());
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.TableConstraintVisitor = TableConstraintVisitor;
//# sourceMappingURL=tableConstraintVisitor.js.map