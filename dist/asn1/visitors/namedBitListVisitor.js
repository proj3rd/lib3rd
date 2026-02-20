"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NamedBitListVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const namedBitVisitor_1 = require("./namedBitVisitor");
/**
 * # Grammar
 * ```
 * namedBitList: (namedBit) (COMMA namedBit)*
 * ```
 */
class NamedBitListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const namedBitCtxes = ctx.namedBit();
        return namedBitCtxes.map((namedBitCtx) => namedBitCtx.accept(new namedBitVisitor_1.NamedBitVisitor()));
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.NamedBitListVisitor = NamedBitListVisitor;
//# sourceMappingURL=namedBitListVisitor.js.map