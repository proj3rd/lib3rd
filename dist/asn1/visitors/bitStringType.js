"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var bitString_1 = require("../classes/bitString");
/**
 * ANTLR4 grammar
 * ```
 * (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
var BitStringTypeVisitor = /** @class */ (function () {
    function BitStringTypeVisitor() {
    }
    BitStringTypeVisitor.prototype.visitChildren = function (bitStringTypeCtx) {
        var childCtxes = bitStringTypeCtx.children;
        var bitStringType = new bitString_1.BitString();
        if (childCtxes[3]) {
            logging_1.log.warn(utils_1.getLogWithAsn1(bitStringTypeCtx, 'NamedBitList not supported:'));
        }
        return bitStringType;
    };
    return BitStringTypeVisitor;
}());
exports.BitStringTypeVisitor = BitStringTypeVisitor;
