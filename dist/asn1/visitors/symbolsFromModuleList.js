"use strict";
exports.__esModule = true;
var symbolsFromModule_1 = require("./symbolsFromModule");
/**
 * ANTLR4 grammar
 * ```
 * symbolsFromModuleList :
 *      (symbolsFromModule) (symbolsFromModule)*
 * ```
 */
var SymbolsFromModuleListVisitor = /** @class */ (function () {
    function SymbolsFromModuleListVisitor() {
    }
    SymbolsFromModuleListVisitor.prototype.visitChildren = function (symbolsFromModuleListCtx) {
        var symbolsFromModule = {};
        symbolsFromModuleListCtx.children.forEach(function (symbolsFromModuleCtx) {
            var _a = symbolsFromModuleCtx.accept(new symbolsFromModule_1.SymbolsFromModuleVisitor()), moduleName = _a.moduleName, symbols = _a.symbols;
            symbols.forEach(function (symbol) {
                symbolsFromModule[symbol] = moduleName;
            });
        });
        return symbolsFromModule;
    };
    return SymbolsFromModuleListVisitor;
}());
exports.SymbolsFromModuleListVisitor = SymbolsFromModuleListVisitor;
