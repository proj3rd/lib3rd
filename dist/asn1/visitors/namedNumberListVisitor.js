"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const namedNumberVisitor_1 = require("./namedNumberVisitor");
/**
 * # Grammar
 * ```
 * namedNumberList: (namedNumber) (COMMA namedNumber)*
 * ```
 */
class NamedNumberListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const namedNumberCtxes = ctx.namedNumber();
        return namedNumberCtxes
            .map((namedNumberCtx) => namedNumberCtx.accept(new namedNumberVisitor_1.NamedNumberVisitor()));
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.NamedNumberListVisitor = NamedNumberListVisitor;
//# sourceMappingURL=namedNumberListVisitor.js.map