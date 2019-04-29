"use strict";
exports.__esModule = true;
var enumeration_1 = require("./enumeration");
/**
 * ANTLR4 grammar
 * ```
 * additionalEnumeration : enumeration
 * ```
 */
var AdditionalEnumerationVisitor = /** @class */ (function () {
    function AdditionalEnumerationVisitor() {
    }
    AdditionalEnumerationVisitor.prototype.visitChildren = function (additionalEnumerationCtx) {
        var enumerationCtx = additionalEnumerationCtx.children[0];
        return enumerationCtx.accept(new enumeration_1.EnumerationVisitor());
    };
    return AdditionalEnumerationVisitor;
}());
exports.AdditionalEnumerationVisitor = AdditionalEnumerationVisitor;
