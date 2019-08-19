"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alternativeTypeList_1 = require("./alternativeTypeList");
/**
 * ANTLR4 grammar
 * ```
 * rootAlternativeTypeList  : alternativeTypeList
 * ```
 */
var RootAlternativeTypeListVisitor = /** @class */ (function () {
    function RootAlternativeTypeListVisitor() {
    }
    RootAlternativeTypeListVisitor.prototype.visitChildren = function (rootAlternativeTypeListCtx) {
        var alternativeTypeListCtx = rootAlternativeTypeListCtx.children[0];
        return alternativeTypeListCtx.accept(new alternativeTypeList_1.AlternativeTypeListVisitor());
    };
    return RootAlternativeTypeListVisitor;
}());
exports.RootAlternativeTypeListVisitor = RootAlternativeTypeListVisitor;
