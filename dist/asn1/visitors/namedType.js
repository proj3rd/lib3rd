"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var namedType_1 = require("../classes/namedType");
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
        var childCtxes = namedTypeCtx.children;
        var nameCtx = childCtxes[0];
        var asnTypeCtx = childCtxes[1];
        var named = nameCtx.getText();
        var asnType = asnTypeCtx.accept(new asnType_1.AsnTypeVisitor());
        return new namedType_1.NamedType(named, asnType);
    };
    return NamedTypeVisitor;
}());
exports.NamedTypeVisitor = NamedTypeVisitor;
