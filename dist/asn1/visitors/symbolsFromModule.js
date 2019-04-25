"use strict";
exports.__esModule = true;
/**
 * ANTLR4 grammar
 * ```
 * symbolsFromModule : symbolList FROM_LITERAL globalModuleReference
 * symbolList   : (symbol) (COMMA symbol)*
 * ```
 */
var SymbolsFromModuleVisitor = /** @class */ (function () {
    function SymbolsFromModuleVisitor() {
    }
    SymbolsFromModuleVisitor.prototype.visitChildren = function (symbolsFromModuleCtx) {
        var moduleName = symbolsFromModuleCtx.children[2].getText();
        var symbolListCtx = symbolsFromModuleCtx.children[0];
        var symbols = [];
        symbolListCtx.children.forEach(function (symbolCtx, index) {
            if (index % 2 === 0) {
                // TODO: Need to implement/use SymbolCtxVisitor class?
                symbols.push(symbolCtx.children[0].getText());
            }
        });
        return { moduleName: moduleName, symbols: symbols };
    };
    return SymbolsFromModuleVisitor;
}());
exports.SymbolsFromModuleVisitor = SymbolsFromModuleVisitor;
