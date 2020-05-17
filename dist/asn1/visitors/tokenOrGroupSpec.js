"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const optionalGroup_1 = require("./optionalGroup");
const requiredToken_1 = require("./requiredToken");
/**
 * ANTLR4 grammar
 * ```
 * tokenOrGroupSpec : requiredToken | optionalGroup
 * ```
 */
class TokenOrGroupSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(tokenOrGroupSpecCtx) {
        const childCtx = tokenOrGroupSpecCtx.children[0];
        if (childCtx instanceof ASN_3gppParser_1.RequiredTokenContext) {
            return childCtx.accept(new requiredToken_1.RequiredTokenVisitor());
        }
        if (childCtx instanceof ASN_3gppParser_1.OptionalGroupContext) {
            return childCtx.accept(new optionalGroup_1.OptionalGroupVisitor());
        }
    }
}
exports.TokenOrGroupSpecVisitor = TokenOrGroupSpecVisitor;
