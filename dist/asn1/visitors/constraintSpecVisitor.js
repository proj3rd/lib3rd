"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const ASN_3gppParser_1 = require("../grammar/ASN_3gppParser");
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
        if (childCtx instanceof ASN_3gppParser_1.GeneralConstraintContext) {
            return childCtx.accept(new generalConstraintVisitor_1.GeneralConstraintVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.SubtypeConstraintContext) {
            return childCtx.accept(new subtypeConstraintVisitor_1.SubtypeConstraintVisitor());
        }
        else {
            throw Error();
        }
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ConstraintSpecVisitor = ConstraintSpecVisitor;
//# sourceMappingURL=constraintSpecVisitor.js.map