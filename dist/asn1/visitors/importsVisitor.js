"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const imports_1 = require("../classes/imports");
const symbolsImportedVisitor_1 = require("./symbolsImportedVisitor");
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
        const imports = symbolsImportedCtx.accept(new symbolsImportedVisitor_1.SymbolsImportedVisitor());
        return new imports_1.Imports(imports);
    }
    defaultResult() {
        return null;
    }
}
exports.ImportsVisitor = ImportsVisitor;
//# sourceMappingURL=importsVisitor.js.map