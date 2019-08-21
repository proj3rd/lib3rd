"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var bitString_1 = require("../classes/bitString");
/**
 * ANTLR4 grammar
 * ```
 * (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
var BitStringTypeVisitor = /** @class */ (function (_super) {
    __extends(BitStringTypeVisitor, _super);
    function BitStringTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BitStringTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    BitStringTypeVisitor.prototype.visitChildren = function (bitStringTypeCtx) {
        var childCtxes = bitStringTypeCtx.children;
        var bitStringType = new bitString_1.BitString();
        if (childCtxes[3]) {
            logging_1.log.warn(utils_1.getLogWithAsn1(bitStringTypeCtx, 'NamedBitList not supported:'));
        }
        return bitStringType;
    };
    return BitStringTypeVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.BitStringTypeVisitor = BitStringTypeVisitor;
