"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var symbolsImported_1 = require("./symbolsImported");
/**
 * ANTLR4 grammar
 * ```
 * imports :   (IMPORTS_LITERAL symbolsImported SEMI_COLON )?
 * ```
 */
var ImportsVisitor = /** @class */ (function () {
    function ImportsVisitor() {
    }
    ImportsVisitor.prototype.visitChildren = function (importsCtx) {
        var imports = {};
        if (importsCtx.children) {
            imports = importsCtx.children[1].accept(new symbolsImported_1.SymbolsImportedVisitor());
        }
        return imports;
    };
    return ImportsVisitor;
}());
exports.ImportsVisitor = ImportsVisitor;
