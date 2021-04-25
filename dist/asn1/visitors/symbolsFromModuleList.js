"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolsFromModuleListVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const symbolsFromModuleVisitor_1 = require("./symbolsFromModuleVisitor");
/**
 * # Grammar
 * ```
 * symbolsFromModuleList: (symbolsFromModule) (symbolsFromModule)*
 * ```
 */
class SymbolsFromModuleListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const symbolsFromModuleCtxes = ctx.symbolsFromModule();
        return symbolsFromModuleCtxes
            .map((symbolsFromModuleCtx) => symbolsFromModuleCtx.accept(new symbolsFromModuleVisitor_1.SymbolsFromModuleVisitor()));
    }
    defaultResult() {
        return [];
    }
}
exports.SymbolsFromModuleListVisitor = SymbolsFromModuleListVisitor;
//# sourceMappingURL=symbolsFromModuleList.js.map