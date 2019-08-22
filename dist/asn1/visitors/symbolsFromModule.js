"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * ANTLR4 grammar
 * ```
 * symbolsFromModule : symbolList FROM_LITERAL globalModuleReference
 * symbolList   : (symbol) (COMMA symbol)*
 * ```
 */
class SymbolsFromModuleVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return { moduleName: undefined, symbols: [] };
    }
    visitChildren(symbolsFromModuleCtx) {
        const symbolListCtx = symbolsFromModuleCtx.children[0];
        const symbolsFromModule = {
            moduleName: symbolsFromModuleCtx.children[2].text,
            symbols: [],
        };
        for (let index = 0; index < symbolListCtx.childCount; index++) {
            if (index % 2) {
                continue;
            }
            const symbolCtx = symbolListCtx.getChild(index);
            // TODO: Need to implement/use SymbolCtxVisitor class?
            symbolsFromModule.symbols.push(symbolCtx.getChild(0).text);
        }
        return symbolsFromModule;
    }
}
exports.SymbolsFromModuleVisitor = SymbolsFromModuleVisitor;
