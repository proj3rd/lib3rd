"use strict";
exports.__esModule = true;
var asnType_1 = require("./asnType");
/**
 * ANTLR4
 * ```
 * namedType : IDENTIFIER   asnType
 * ```
 */
var NamedTypeVisitor = /** @class */ (function () {
    function NamedTypeVisitor() {
    }
    NamedTypeVisitor.prototype.visitChildren = function (namedTypeCtx) {
        var asnTypeCtx = namedTypeCtx.children[1];
        return asnTypeCtx.accept(new asnType_1.AsnTypeVisitor());
    };
    return NamedTypeVisitor;
}());
exports.NamedTypeVisitor = NamedTypeVisitor;
