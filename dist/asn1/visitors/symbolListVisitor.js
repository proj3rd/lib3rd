"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const asnSymbol_1 = require("../classes/asnSymbol");
/**
 * # Grammar
 * ```
 * symbolList: (symbol) (COMMA symbol)*
 * ```
 */
class SymbolListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        return ctx.symbol().map((sym) => sym.accept(new SymbolVisitor()));
    }
    defaultResult() {
        return [];
    }
}
exports.SymbolListVisitor = SymbolListVisitor;
class SymbolVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const name = ctx.getChild(0).text;
        const parameterized = ctx.childCount > 1 ? true : false;
        return new asnSymbol_1.Reference(name, parameterized);
    }
    defaultResult() {
        return new asnSymbol_1.Reference('');
    }
}
//# sourceMappingURL=symbolListVisitor.js.map