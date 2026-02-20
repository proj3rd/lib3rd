"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SymbolsFromModuleVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const symbolsFromModule_1 = require("../classes/symbolsFromModule");
const globalModuleReferenceVisitor_1 = require("./globalModuleReferenceVisitor");
const symbolListVisitor_1 = require("./symbolListVisitor");
/**
 * # Grammar
 * ```
 * symbolsFromModule: symbolList FROM_LITERAL globalModuleReference
 * ```
 */
class SymbolsFromModuleVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const symbols = ctx.symbolList().accept(new symbolListVisitor_1.SymbolListVisitor());
        const moduleName = ctx
            .globalModuleReference()
            .accept(new globalModuleReferenceVisitor_1.GlobalModuleReferenceVisitor());
        return new symbolsFromModule_1.SymbolsFromModule(moduleName, symbols);
    }
    defaultResult() {
        return new symbolsFromModule_1.SymbolsFromModule('', []);
    }
}
exports.SymbolsFromModuleVisitor = SymbolsFromModuleVisitor;
//# sourceMappingURL=symbolsFromModuleVisitor.js.map