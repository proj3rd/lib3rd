"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var symbolsImported_1 = require("./symbolsImported");
/**
 * ANTLR4 grammar
 * ```
 * imports :   (IMPORTS_LITERAL symbolsImported SEMI_COLON )?
 * ```
 */
var ImportsVisitor = /** @class */ (function (_super) {
    __extends(ImportsVisitor, _super);
    function ImportsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImportsVisitor.prototype.defaultResult = function () {
        return {};
    };
    ImportsVisitor.prototype.visitChildren = function (importsCtx) {
        var imports = {};
        if (importsCtx.children) {
            imports = importsCtx.children[1].accept(new symbolsImported_1.SymbolsImportedVisitor());
        }
        return imports;
    };
    return ImportsVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ImportsVisitor = ImportsVisitor;
