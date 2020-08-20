"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const valueRange_1 = require("../classes/valueRange");
const sizeConstraintVisitor_1 = require("./sizeConstraintVisitor");
const valueVisitor_1 = require("./valueVisitor");
/**
 * subtypeElements :
 *   ((value | MIN_LITERAL) LESS_THAN?  DOUBLE_DOT LESS_THAN? (value | MAX_LITERAL))
 *   | sizeConstraint
 *   | (PATTERN_LITERAL value)
 *   | value
 */
class SubtypeElementsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCount = ctx.childCount;
        if (childCount === 1) {
            const sizeConstraintCtx = ctx.sizeConstraint();
            if (sizeConstraintCtx !== undefined) {
                return sizeConstraintCtx.accept(new sizeConstraintVisitor_1.SizeConstraintVisitor());
            }
            const valueCtxes = ctx.value();
            if (valueCtxes.length > 0) {
                const valueCtx = valueCtxes[0];
                return valueCtx.accept(new valueVisitor_1.ValueVisitor());
            }
            throw Error();
        }
        else if (childCount === 2) {
            const valueCtx = ctx.value();
            if (valueCtx !== undefined) {
                return unimpl_1.unimpl();
            }
            throw Error();
        }
        else if (childCount === 3 || childCount === 4 || childCount === 5) {
            const valueCtxes = ctx.value();
            if (valueCtxes.length !== 2) {
                return unimpl_1.unimpl();
            }
            const [lower, upper] = valueCtxes.map((valueCtx) => valueCtx.accept(new valueVisitor_1.ValueVisitor()));
            return new valueRange_1.ValueRange(lower, upper);
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.SubtypeElementsVisitor = SubtypeElementsVisitor;
//# sourceMappingURL=subtypeElementsVisitor.js.map