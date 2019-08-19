"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var octetString_1 = require("../classes/octetString");
/**
 * ANTLR4 grammar
 * ```
 * octetStringType  :  OCTET_LITERAL STRING_LITERAL
 * ```
 */
var OctetStringTypeVisitor = /** @class */ (function () {
    function OctetStringTypeVisitor() {
    }
    OctetStringTypeVisitor.prototype.visitChildren = function (octetStringTypeCtx) {
        return new octetString_1.OctetString();
    };
    return OctetStringTypeVisitor;
}());
exports.OctetStringTypeVisitor = OctetStringTypeVisitor;
