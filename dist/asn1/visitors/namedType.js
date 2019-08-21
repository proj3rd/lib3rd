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
var namedType_1 = require("../classes/namedType");
var asnType_1 = require("./asnType");
/**
 * ANTLR4
 * ```
 * namedType : IDENTIFIER   asnType
 * ```
 */
var NamedTypeVisitor = /** @class */ (function (_super) {
    __extends(NamedTypeVisitor, _super);
    function NamedTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NamedTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    NamedTypeVisitor.prototype.visitChildren = function (namedTypeCtx) {
        var childCtxes = namedTypeCtx.children;
        var nameCtx = childCtxes[0];
        var asnTypeCtx = childCtxes[1];
        var named = nameCtx.text;
        var asnType = asnTypeCtx.accept(new asnType_1.AsnTypeVisitor());
        return new namedType_1.NamedType(named, asnType);
    };
    return NamedTypeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.NamedTypeVisitor = NamedTypeVisitor;
