"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
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
        if (thirdCtx instanceof grammar3rdParser_1.DefinedValueContext) {
            return unimpl_1.todo();
        }
        const valueLiteral = thirdCtx.text;
        if (Number.isNaN(+valueLiteral)) {
            throw Error();
        }
        return { name, valueLiteral };
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.NamedBitVisitor = NamedBitVisitor;
//# sourceMappingURL=namedBitVisitor.js.map