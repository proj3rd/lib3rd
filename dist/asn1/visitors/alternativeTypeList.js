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
var namedType_1 = require("./namedType");
/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeList : (namedType) (COMMA namedType)*
 * ```
 */
var AlternativeTypeListVisitor = /** @class */ (function (_super) {
    __extends(AlternativeTypeListVisitor, _super);
    function AlternativeTypeListVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AlternativeTypeListVisitor.prototype.defaultResult = function () {
        return [];
    };
    AlternativeTypeListVisitor.prototype.visitChildren = function (alternativeTypeListCtx) {
        var childCtxes = alternativeTypeListCtx.children;
        var alternativeTypeList = [];
        childCtxes.forEach(function (childCtx, index) {
            if (index % 2) {
                return;
            }
            alternativeTypeList.push(childCtx.accept(new namedType_1.NamedTypeVisitor()));
        });
        return alternativeTypeList;
    };
    return AlternativeTypeListVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.AlternativeTypeListVisitor = AlternativeTypeListVisitor;
