"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const bitString_1 = require("../classes/bitString");
/**
 * ANTLR4 grammar
 * ```
 * (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
class BitStringTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(bitStringTypeCtx) {
        const childCtxes = bitStringTypeCtx.children;
        const bitStringType = new bitString_1.BitString();
        if (childCtxes[3]) {
            logging_1.log.warn(utils_1.getLogWithAsn1(bitStringTypeCtx, 'NamedBitList not supported:'));
        }
        return bitStringType;
    }
}
exports.BitStringTypeVisitor = BitStringTypeVisitor;
