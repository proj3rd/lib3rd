"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueSetOptionalitySpecVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
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