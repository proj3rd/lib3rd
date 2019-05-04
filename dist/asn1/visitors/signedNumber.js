"use strict";
exports.__esModule = true;
/**
 * ANTLR4 grammar
 * ```
 * signedNumber :  (MINUS)? NUMBER
 * ```
 */
var SignedNumberVisitor = /** @class */ (function () {
    function SignedNumberVisitor() {
    }
    SignedNumberVisitor.prototype.visitChildren = function (signedNumberCtx) {
        return Number(signedNumberCtx.getText());
    };
    return SignedNumberVisitor;
}());
exports.SignedNumberVisitor = SignedNumberVisitor;
