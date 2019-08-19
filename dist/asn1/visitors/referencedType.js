"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var definedType_1 = require("./definedType");
/**
 * ANTLR4 grammar
 * ```
 * referencedType :
 *   definedType
 * ```
 */
var ReferencedTypeVisitor = /** @class */ (function () {
    function ReferencedTypeVisitor() {
    }
    ReferencedTypeVisitor.prototype.visitChildren = function (referencedTypeCtx) {
        var definedTypeCtx = referencedTypeCtx.children[0];
        return definedTypeCtx.accept(new definedType_1.DefinedTypeVisitor());
    };
    return ReferencedTypeVisitor;
}());
exports.ReferencedTypeVisitor = ReferencedTypeVisitor;
