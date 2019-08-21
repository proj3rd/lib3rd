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
var extensionAdditionAlternativesList_1 = require("./extensionAdditionAlternativesList");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternatives  : (COMMA  extensionAdditionAlternativesList )?
 * ```
 */
var ExtensionAdditionAlternativesVisitor = /** @class */ (function (_super) {
    __extends(ExtensionAdditionAlternativesVisitor, _super);
    function ExtensionAdditionAlternativesVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionAdditionAlternativesVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ExtensionAdditionAlternativesVisitor.prototype.visitChildren = function (extensionAdditionAlternativesCtx) {
        var extensionAdditionAlternatives = [];
        if (extensionAdditionAlternativesCtx.children) {
            var extensionAdditionAlternativesListCtx = extensionAdditionAlternativesCtx.children[1];
            extensionAdditionAlternatives =
                extensionAdditionAlternativesListCtx.accept(new extensionAdditionAlternativesList_1.ExtensionAdditionAlternativesListVisitor());
        }
        return extensionAdditionAlternatives;
    };
    return ExtensionAdditionAlternativesVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ExtensionAdditionAlternativesVisitor = ExtensionAdditionAlternativesVisitor;
