"use strict";
exports.__esModule = true;
var namedType_1 = require("./namedType");
/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeList : (namedType) (COMMA namedType)*
 * ```
 */
var AlternativeTypeListVisitor = /** @class */ (function () {
    function AlternativeTypeListVisitor() {
    }
    AlternativeTypeListVisitor.prototype.visitChildren = function (alternativeTypeListCtx) {
        var childCtxes = alternativeTypeListCtx.children;
        var alternativeTypeList = [];
        childCtxes.forEach(function (childCtx, index) {
            if (index % 2) {
                return;
            }
            // TODO
            alternativeTypeList.push(childCtx.accept(new namedType_1.NamedTypeVisitor()));
        });
        return alternativeTypeList;
    };
    return AlternativeTypeListVisitor;
}());
exports.AlternativeTypeListVisitor = AlternativeTypeListVisitor;
