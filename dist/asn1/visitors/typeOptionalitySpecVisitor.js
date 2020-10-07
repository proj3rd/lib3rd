"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const optionality_1 = require("../classes/optionality");
const asnTypeVisitor_1 = require("./asnTypeVisitor");
/**
 * # Grammar
 * ```
 * typeOptionalitySpec: OPTIONAL_LITERAL | (DEFAULT_LITERAL asnType)
 * ```
 */
class TypeOptionalitySpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const asnTypeCtx = ctx.asnType();
        if (asnTypeCtx === undefined) {
            return new optionality_1.Optionality();
        }
        const asnType = asnTypeCtx.accept(new asnTypeVisitor_1.AsnTypeVisitor());
        return new optionality_1.Optionality(asnType);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.TypeOptionalitySpecVisitor = TypeOptionalitySpecVisitor;
//# sourceMappingURL=typeOptionalitySpecVisitor.js.map