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
/**
 * ANTLR4 grammar
 * ```
 * symbolsFromModule : symbolList FROM_LITERAL globalModuleReference
 * symbolList   : (symbol) (COMMA symbol)*
 * ```
 */
var SymbolsFromModuleVisitor = /** @class */ (function (_super) {
    __extends(SymbolsFromModuleVisitor, _super);
    function SymbolsFromModuleVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SymbolsFromModuleVisitor.prototype.defaultResult = function () {
        return { moduleName: undefined, symbols: [] };
    };
    SymbolsFromModuleVisitor.prototype.visitChildren = function (symbolsFromModuleCtx) {
        var symbolListCtx = symbolsFromModuleCtx.children[0];
        var symbolsFromModule = {
            moduleName: symbolsFromModuleCtx.children[2].text,
            symbols: [],
        };
        for (var index = 0; index < symbolListCtx.childCount; index++) {
            if (index % 2) {
                return;
            }
            var symbolCtx = symbolListCtx.getChild(index);
            // TODO: Need to implement/use SymbolCtxVisitor class?
            symbolsFromModule.symbols.push(symbolCtx.getChild(0).text);
        }
        return symbolsFromModule;
    };
    return SymbolsFromModuleVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.SymbolsFromModuleVisitor = SymbolsFromModuleVisitor;
