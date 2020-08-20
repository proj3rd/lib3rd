"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const optionality_1 = require("../classes/optionality");
/**
 * # Grammar
 * ```
 * valueSetOptionalitySpec: OPTIONAL_LITERAL | DEFAULT_LITERAL valueSet
 * ```
 */
class ValueSetOptionalitySpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const valueSetCtx = ctx.valueSet();
        if (valueSetCtx === undefined) {
            return new optionality_1.Optionality();
        }
        return unimpl_1.unimpl();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ValueSetOptionalitySpecVisitor = ValueSetOptionalitySpecVisitor;
//# sourceMappingURL=valueSetOptionalitySpecVisitor.js.map