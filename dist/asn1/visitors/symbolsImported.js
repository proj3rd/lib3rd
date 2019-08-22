"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const symbolsFromModuleList_1 = require("./symbolsFromModuleList");
/**
 * ANTLR4 grammar
 * ```
 * symbolsImported : (symbolsFromModuleList )?
 * ```
 */
class SymbolsImportedVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return {};
    }
    visitChildren(symbolsImportedCtx) {
        let symbolsFromModule = {};
        if (symbolsImportedCtx.children) {
            symbolsFromModule = symbolsImportedCtx.children[0].accept(new symbolsFromModuleList_1.SymbolsFromModuleListVisitor());
        }
        return symbolsFromModule;
    }
}
exports.SymbolsImportedVisitor = SymbolsImportedVisitor;
