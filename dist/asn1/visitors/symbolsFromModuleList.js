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
var symbolsFromModule_1 = require("./symbolsFromModule");
/**
 * ANTLR4 grammar
 * ```
 * symbolsFromModuleList :
 *      (symbolsFromModule) (symbolsFromModule)*
 * ```
 */
var SymbolsFromModuleListVisitor = /** @class */ (function (_super) {
    __extends(SymbolsFromModuleListVisitor, _super);
    function SymbolsFromModuleListVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SymbolsFromModuleListVisitor.prototype.defaultResult = function () {
        return {};
    };
    SymbolsFromModuleListVisitor.prototype.visitChildren = function (symbolsFromModuleListCtx) {
        var symbolsFromModule = {};
        symbolsFromModuleListCtx.children.forEach(function (symbolsFromModuleCtx) {
            var _a = symbolsFromModuleCtx.accept(new symbolsFromModule_1.SymbolsFromModuleVisitor()), moduleName = _a.moduleName, symbols = _a.symbols;
            symbols.forEach(function (symbol) {
                symbolsFromModule[symbol] = moduleName;
            });
        });
        return symbolsFromModule;
    };
    return SymbolsFromModuleListVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.SymbolsFromModuleListVisitor = SymbolsFromModuleListVisitor;
