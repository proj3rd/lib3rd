"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const optionality_1 = require("../classes/optionality");
const valueVisitor_1 = require("./valueVisitor");
/**
 * # Grammar
 * ```
 * valueOptionalitySpec: OPTIONAL_LITERAL | (DEFAULT_LITERAL value)
 * ```
 */
class ValueOptionalitySpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const valueCtx = ctx.value();
        if (valueCtx === undefined) {
            return new optionality_1.Optionality();
        }
        const value = valueCtx.accept(new valueVisitor_1.ValueVisitor());
        return new optionality_1.Optionality(value);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ValueOptionalitySpecVisitor = ValueOptionalitySpecVisitor;
//# sourceMappingURL=valueOptionalitySpecVisitor.js.map