"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const signedNumber_1 = require("./signedNumber");
/**
 * ANTLR4 grammar
 * ```
 * namedNumber :   IDENTIFIER L_PARAN (signedNumber | definedValue) R_PARAN
 * ```
 */
class NamedNumberVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(namedNumberCtx) {
        const { children } = namedNumberCtx;
        const name = children[0].text;
        let num;
        const numberCtx = children[2];
        if (numberCtx instanceof ASN_3gppParser_1.SignedNumberContext) {
            num = numberCtx.accept(new signedNumber_1.SignedNumberVisitor());
        }
        else if (numberCtx instanceof ASN_3gppParser_1.DefinedValueContext) {
            logging_1.log.warn(new Error('DefinedValue not supported'));
        }
        else {
            logging_1.log.warn(new Error(utils_1.getLogWithAsn1(namedNumberCtx, 'Unexpected ASN.1')));
        }
        return { name, num };
    }
}
exports.NamedNumberVisitor = NamedNumberVisitor;
