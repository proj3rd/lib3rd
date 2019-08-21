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
var symbolsFromModuleList_1 = require("./symbolsFromModuleList");
/**
 * ANTLR4 grammar
 * ```
 * symbolsImported : (symbolsFromModuleList )?
 * ```
 */
var SymbolsImportedVisitor = /** @class */ (function (_super) {
    __extends(SymbolsImportedVisitor, _super);
    function SymbolsImportedVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SymbolsImportedVisitor.prototype.defaultResult = function () {
        return {};
    };
    SymbolsImportedVisitor.prototype.visitChildren = function (symbolsImportedCtx) {
        var symbolsFromModule = {};
        if (symbolsImportedCtx.children) {
            symbolsFromModule = symbolsImportedCtx.children[0].accept(new symbolsFromModuleList_1.SymbolsFromModuleListVisitor());
        }
        return symbolsFromModule;
    };
    return SymbolsImportedVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.SymbolsImportedVisitor = SymbolsImportedVisitor;
