"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const symbolVisitor_1 = require("./symbolVisitor");
/**
 * # Grammar
 * ```
 * symbolList: (symbol) (COMMA symbol)*
 * ```
 */
class SymbolListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        return ctx.symbol().map((sym) => sym.accept(new symbolVisitor_1.SymbolVisitor()));
    }
    defaultResult() {
        return [];
    }
}
exports.SymbolListVisitor = SymbolListVisitor;
//# sourceMappingURL=symbolListVisitor.js.map