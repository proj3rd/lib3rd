"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const symbolsImported_1 = require("./symbolsImported");
/**
 * ANTLR4 grammar
 * ```
 * imports :   (IMPORTS_LITERAL symbolsImported SEMI_COLON )?
 * ```
 */
class ImportsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return {};
    }
    visitChildren(importsCtx) {
        let imports = {};
        if (importsCtx.children) {
            imports = importsCtx.children[1].accept(new symbolsImported_1.SymbolsImportedVisitor());
        }
        return imports;
    }
}
exports.ImportsVisitor = ImportsVisitor;
