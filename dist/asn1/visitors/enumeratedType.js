"use strict";
exports.__esModule = true;
var enumerated_1 = require("../classes/enumerated");
var enumerations_1 = require("./enumerations");
/**
 * ANTLR4 grammar
 * ```
 * enumeratedType : ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
var EnumeratedTypeVisitor = /** @class */ (function () {
    function EnumeratedTypeVisitor() {
    }
    EnumeratedTypeVisitor.prototype.visitChildren = function (enumeratedTypeCtx) {
        var enumerationsCtx = enumeratedTypeCtx.children[2];
        return new enumerated_1.Enumerated(enumerationsCtx.accept(new enumerations_1.EnumerationsVisitor()));
    };
    return EnumeratedTypeVisitor;
}());
exports.EnumeratedTypeVisitor = EnumeratedTypeVisitor;
