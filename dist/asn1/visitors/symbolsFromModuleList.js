"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const symbolsFromModule_1 = require("./symbolsFromModule");
/**
 * ANTLR4 grammar
 * ```
 * symbolsFromModuleList :
 *      (symbolsFromModule) (symbolsFromModule)*
 * ```
 */
class SymbolsFromModuleListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return {};
    }
    visitChildren(symbolsFromModuleListCtx) {
        const symbolsFromModule = {};
        symbolsFromModuleListCtx.children.forEach((symbolsFromModuleCtx) => {
            const { moduleName, symbols } = symbolsFromModuleCtx.accept(new symbolsFromModule_1.SymbolsFromModuleVisitor());
            symbols.forEach((symbol) => {
                symbolsFromModule[symbol] = moduleName;
            });
        });
        return symbolsFromModule;
    }
}
exports.SymbolsFromModuleListVisitor = SymbolsFromModuleListVisitor;
