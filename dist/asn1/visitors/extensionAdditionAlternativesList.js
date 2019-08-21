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
var extensionAdditionAlternative_1 = require("./extensionAdditionAlternative");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesList  : (extensionAdditionAlternative) (COMMA  extensionAdditionAlternative)*
 * ```
 */
var ExtensionAdditionAlternativesListVisitor = /** @class */ (function (_super) {
    __extends(ExtensionAdditionAlternativesListVisitor, _super);
    function ExtensionAdditionAlternativesListVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionAdditionAlternativesListVisitor.prototype.defaultResult = function () {
        return [];
    };
    ExtensionAdditionAlternativesListVisitor.prototype.visitChildren = function (extensionAdditionAlternativesListCtx) {
        var extensionAdditionAlternativesList = [];
        var childCtxes = extensionAdditionAlternativesListCtx.children;
        childCtxes.forEach(function (childCtx, index) {
            if (index % 2) {
                return;
            }
            extensionAdditionAlternativesList.push(childCtx.accept(new extensionAdditionAlternative_1.ExtensionAdditionAlternativeVisitor()));
        });
        return extensionAdditionAlternativesList;
    };
    return ExtensionAdditionAlternativesListVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ExtensionAdditionAlternativesListVisitor = ExtensionAdditionAlternativesListVisitor;
