"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const signedNumber_1 = require("./signedNumber");
/**
 * ANTLR4 grammar
 * ```
 * integerValue :  signedNumber | IDENTIFIER
 * ```
 */
class IntegerValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(integerValueCtx) {
        const childCtx = integerValueCtx.children[0];
        let integerValue;
        if (childCtx instanceof ASN_3gppParser_1.SignedNumberContext) {
            integerValue = integerValueCtx.accept(new signedNumber_1.SignedNumberVisitor());
        }
        else {
            integerValue = integerValueCtx.text;
        }
        return integerValue;
    }
}
exports.IntegerValueVisitor = IntegerValueVisitor;
