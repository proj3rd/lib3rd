"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const imports_1 = require("../classes/imports");
const symbolsFromModule_1 = require("../classes/symbolsFromModule");
const symbolListVisitor_1 = require("./symbolListVisitor");
/**
 * # Grammar
 * ```
 * imports: (IMPORTS_LITERAL symbolsImported SEMI_COLON)?
 * ```
 */
class ImportsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        if (ctx.childCount === 0) {
            return null;
        }
        const symbolsImportedCtx = ctx.symbolsImported();
        if (symbolsImportedCtx === undefined) {
            throw Error();
        }
        const imports = symbolsImportedCtx.accept(new SymbolsImportedVisitor());
        return new imports_1.Imports(imports);
    }
    defaultResult() {
        return null;
    }
}
exports.ImportsVisitor = ImportsVisitor;
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
        return symbolsFromModuleListCtx.accept(new SymbolsFromModuleListVisitor());
    }
    defaultResult() {
        return [];
    }
}
/**
 * # Grammar
 * ```
 * symbolsFromModuleList: (symbolsFromModule) (symbolsFromModule)*
 * ```
 */
class SymbolsFromModuleListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const symbolsFromModuleCtxes = ctx.symbolsFromModule();
        return symbolsFromModuleCtxes.map((symbolsFromModuleCtx) => symbolsFromModuleCtx.accept(new SymbolsFromModuleVisitor()));
    }
    defaultResult() {
        return [];
    }
}
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
            .accept(new GlobalModuleReferenceVisitor());
        return new symbolsFromModule_1.SymbolsFromModule(moduleName, symbols);
    }
    defaultResult() {
        return new symbolsFromModule_1.SymbolsFromModule('', []);
    }
}
/**
 * # Grammar
 * ```
 * globalModuleReference: IDENTIFIER assignedIdentifier
 * ```
 */
class GlobalModuleReferenceVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        if (ctx.assignedIdentifier().text !== '') {
            throw Error();
        }
        return ctx.text;
    }
    defaultResult() {
        return '';
    }
}
//# sourceMappingURL=importsVisitor.js.map