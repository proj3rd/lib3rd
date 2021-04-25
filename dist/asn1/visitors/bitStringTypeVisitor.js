"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BitStringTypeVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const bitStringType_1 = require("../classes/bitStringType");
const namedBitListVisitor_1 = require("./namedBitListVisitor");
/**
 * # Grammar
 * ```
 * bitStringType: (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
class BitStringTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const namedBitList = [];
        const namedBitListCtx = ctx.namedBitList();
        if (namedBitListCtx !== undefined) {
            namedBitList.push(...namedBitListCtx.accept(new namedBitListVisitor_1.NamedBitListVisitor()));
        }
        return new bitStringType_1.BitStringType(namedBitList);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.BitStringTypeVisitor = BitStringTypeVisitor;
//# sourceMappingURL=bitStringTypeVisitor.js.map