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
var definedType_1 = require("./definedType");
/**
 * ANTLR4 grammar
 * ```
 * referencedType :
 *   definedType
 * ```
 */
var ReferencedTypeVisitor = /** @class */ (function (_super) {
    __extends(ReferencedTypeVisitor, _super);
    function ReferencedTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReferencedTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    ReferencedTypeVisitor.prototype.visitChildren = function (referencedTypeCtx) {
        var definedTypeCtx = referencedTypeCtx.children[0];
        return definedTypeCtx.accept(new definedType_1.DefinedTypeVisitor());
    };
    return ReferencedTypeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.ReferencedTypeVisitor = ReferencedTypeVisitor;
