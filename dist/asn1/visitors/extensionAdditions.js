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
var extensionAdditionList_1 = require("./extensionAdditionList");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditions  :  (COMMA  extensionAdditionList)?
 * ```
 */
var ExtensionAdditionsVisitor = /** @class */ (function (_super) {
    __extends(ExtensionAdditionsVisitor, _super);
    function ExtensionAdditionsVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtensionAdditionsVisitor.prototype.defaultResult = function () {
        return [];
    };
    ExtensionAdditionsVisitor.prototype.visitChildren = function (extensionAdditionsCtx) {
        var childCtxes = extensionAdditionsCtx.children;
        var extensionAdditions = [];
        if (childCtxes) {
            var extensionAdditionListCtx = childCtxes[1];
            extensionAdditions = extensionAdditionListCtx.accept(new extensionAdditionList_1.ExtensionAdditionListVisitor());
        }
        return extensionAdditions;
    };
    return ExtensionAdditionsVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ExtensionAdditionsVisitor = ExtensionAdditionsVisitor;
