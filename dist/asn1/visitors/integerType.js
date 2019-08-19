"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var integer_1 = require("../classes/integer");
/**
 * ANTLR4 grammar
 * ```
 * integerType:INTEGER_LITERAL  (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
var IntegerTypeVisitor = /** @class */ (function () {
    function IntegerTypeVisitor() {
    }
    IntegerTypeVisitor.prototype.visitChildren = function (integerTypeCtx) {
        if (integerTypeCtx.children.length > 1) {
            logging_1.log.warn(utils_1.getLogWithAsn1(integerTypeCtx, 'NamedNumberList not supported:'));
        }
        return new integer_1.Integer();
    };
    return IntegerTypeVisitor;
}());
exports.IntegerTypeVisitor = IntegerTypeVisitor;
