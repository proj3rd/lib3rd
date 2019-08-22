"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * ANTLR4 grammar
 * ```
 * signedNumber :  (MINUS)? NUMBER
 * ```
 */
class SignedNumberVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(signedNumberCtx) {
        return Number(signedNumberCtx.text);
    }
}
exports.SignedNumberVisitor = SignedNumberVisitor;
