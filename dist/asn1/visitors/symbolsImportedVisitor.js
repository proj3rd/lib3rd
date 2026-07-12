"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolsImportedVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const symbolsFromModuleList_1 = require("./symbolsFromModuleList");
/**
 * # Grammar
 * ```
 * symbolsImported: (symbolsFromModuleList)?
 * ```
 */
class SymbolsImportedVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        if (ctx.childCount === 0) {
            return [];
        }
        const symbolsFromModuleListCtx = ctx.symbolsFromModuleList();
        if (symbolsFromModuleListCtx === undefined) {
            throw Error();
        }
        return symbolsFromModuleListCtx.accept(new symbolsFromModuleList_1.SymbolsFromModuleListVisitor());
    }
    defaultResult() {
        return [];
    }
}
exports.SymbolsImportedVisitor = SymbolsImportedVisitor;
//# sourceMappingURL=symbolsImportedVisitor.js.map