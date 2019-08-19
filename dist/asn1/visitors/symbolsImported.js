"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var symbolsFromModuleList_1 = require("./symbolsFromModuleList");
/**
 * ANTLR4 grammar
 * ```
 * symbolsImported : (symbolsFromModuleList )?
 * ```
 */
var SymbolsImportedVisitor = /** @class */ (function () {
    function SymbolsImportedVisitor() {
    }
    SymbolsImportedVisitor.prototype.visitChildren = function (symbolsImportedCtx) {
        var symbolsFromModule = {};
        if (symbolsImportedCtx.children) {
            symbolsFromModule = symbolsImportedCtx.children[0].accept(new symbolsFromModuleList_1.SymbolsFromModuleListVisitor());
        }
        return symbolsFromModule;
    };
    return SymbolsImportedVisitor;
}());
exports.SymbolsImportedVisitor = SymbolsImportedVisitor;
