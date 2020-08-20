"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const subtypeConstraint_1 = require("../classes/subtypeConstraint");
const elementSetSpecsVisitor_1 = require("./elementSetSpecsVisitor");
/**
 * # Grammar
 * ```
 * subtypeConstraint: elementSetSpecs
 * ```
 */
class SubtypeConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const elementSetSpecsCtx = ctx.elementSetSpecs();
        const elementSetSpecList = elementSetSpecsCtx.accept(new elementSetSpecsVisitor_1.ElementSetSpecsVisitor());
        return new subtypeConstraint_1.SubtypeConstraint(elementSetSpecList);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.SubtypeConstraintVisitor = SubtypeConstraintVisitor;
//# sourceMappingURL=subtypeConstraintVisitor.js.map