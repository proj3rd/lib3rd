"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedNumberVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const signedNumberVisitor_1 = require("./signedNumberVisitor");
/**
 * # Grammar
 * ```
 * namedNumber: IDENTIFIER L_PARAN (signedNumber | definedValue) R_PARAN
 * ```
 */
class NamedNumberVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const name = ctx.getChild(0).text;
        const thirdCtx = ctx.getChild(2);
        if (thirdCtx instanceof grammar3rdParser_1.SignedNumberContext) {
            const valueLiteral = thirdCtx.accept(new signedNumberVisitor_1.SignedNumberVisitor());
            return { name, valueLiteral };
        }
        if (thirdCtx instanceof grammar3rdParser_1.DefinedValueContext) {
            return unimpl_1.todo();
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.NamedNumberVisitor = NamedNumberVisitor;
//# sourceMappingURL=namedNumberVisitor.js.map