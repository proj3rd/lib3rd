"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const ASN_3gppParser_1 = require("../grammar/ASN_3gppParser");
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
        if (childCtx instanceof ASN_3gppParser_1.UserDefinedConstraintContext) {
            return unimpl_1.unimpl();
        }
        else if (childCtx instanceof ASN_3gppParser_1.TableConstraintContext) {
            return childCtx.accept(new tableConstraintVisitor_1.TableConstraintVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.ContentsConstraintContext) {
            return childCtx.accept(new contentsConstraintVisitor_1.ContentsConstraintVisitor());
        }
        else {
            throw Error(ctx.text);
        }
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.GeneralConstraintVisitor = GeneralConstraintVisitor;
//# sourceMappingURL=generalConstraintVisitor.js.map