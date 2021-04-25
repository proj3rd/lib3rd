"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralConstraintVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const contentsConstraintVisitor_1 = require("./contentsConstraintVisitor");
const tableConstraintVisitor_1 = require("./tableConstraintVisitor");
/**
 * # Grammar
 * ```
 * generalConstraint: userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
class GeneralConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof grammar3rdParser_1.UserDefinedConstraintContext) {
            return unimpl_1.unimpl();
        }
        if (childCtx instanceof grammar3rdParser_1.TableConstraintContext) {
            return childCtx.accept(new tableConstraintVisitor_1.TableConstraintVisitor());
        }
        if (childCtx instanceof grammar3rdParser_1.ContentsConstraintContext) {
            return childCtx.accept(new contentsConstraintVisitor_1.ContentsConstraintVisitor());
        }
        throw Error(ctx.text);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.GeneralConstraintVisitor = GeneralConstraintVisitor;
//# sourceMappingURL=generalConstraintVisitor.js.map