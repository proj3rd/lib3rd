"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const generalConstraintVisitor_1 = require("./generalConstraintVisitor");
const subtypeConstraintVisitor_1 = require("./subtypeConstraintVisitor");
/**
 * # Grammar
 * ```
 * constraintSpec: generalConstraint | subtypeConstraint
 * ```
 */
class ConstraintSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof grammar3rdParser_1.GeneralConstraintContext) {
            return childCtx.accept(new generalConstraintVisitor_1.GeneralConstraintVisitor());
        }
        if (childCtx instanceof grammar3rdParser_1.SubtypeConstraintContext) {
            return childCtx.accept(new subtypeConstraintVisitor_1.SubtypeConstraintVisitor());
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ConstraintSpecVisitor = ConstraintSpecVisitor;
//# sourceMappingURL=constraintSpecVisitor.js.map