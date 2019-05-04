"use strict";
exports.__esModule = true;
var enumerationItem_1 = require("./enumerationItem");
/**
 * ANTLR4 grammar
 * ```
 * enumeration : enumerationItem ( COMMA enumerationItem)*
 * ```
 */
var EnumerationVisitor = /** @class */ (function () {
    function EnumerationVisitor() {
    }
    EnumerationVisitor.prototype.visitChildren = function (enumerationCtx) {
        var childCtxes = enumerationCtx.children;
        var enumeration = [];
        childCtxes.forEach(function (childCtx, index) {
            if (index % 2) {
                return;
            }
            enumeration.push(childCtx.accept(new enumerationItem_1.EnumerationItemVisitor()));
        });
        return enumeration;
    };
    return EnumerationVisitor;
}());
exports.EnumerationVisitor = EnumerationVisitor;
