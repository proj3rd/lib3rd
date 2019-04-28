"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var signedNumber_1 = require("./signedNumber");
/**
 * ANTLR4 grammar
 * ```
 * integerValue :  signedNumber | IDENTIFIER
 * ```
 */
var IntegerValueVisitor = /** @class */ (function () {
    function IntegerValueVisitor() {
    }
    IntegerValueVisitor.prototype.visitChildren = function (integerValueCtx) {
        var childCtx = integerValueCtx.children[0];
        var integerValue = null;
        switch (utils_1.getContextName(childCtx)) {
            case 'signedNumber': {
                integerValue = integerValueCtx.accept(new signedNumber_1.SignedNumberVisitor());
                break;
            }
            default: {
                integerValue = integerValueCtx.getText();
                break;
            }
        }
        return integerValue;
    };
    return IntegerValueVisitor;
}());
exports.IntegerValueVisitor = IntegerValueVisitor;
