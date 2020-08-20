"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const ASN_3gppParser_1 = require("../grammar/ASN_3gppParser");
/**
 * # Grammar
 * ```
 * namedBit: IDENTIFIER L_PARAN (NUMBER | definedValue) R_PARAN
 * ```
 */
class NamedBitVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const name = ctx.getChild(0).text;
        const thirdCtx = ctx.getChild(2);
        if (thirdCtx instanceof ASN_3gppParser_1.DefinedValueContext) {
            return unimpl_1.todo();
        }
        else {
            const valueLiteral = thirdCtx.text;
            if (isNaN(+valueLiteral)) {
                throw Error();
            }
            return { name, valueLiteral };
        }
        return unimpl_1.unreach();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.NamedBitVisitor = NamedBitVisitor;
//# sourceMappingURL=namedBitVisitor.js.map