"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const literal_1 = require("./literal");
const primitiveFieldName_1 = require("./primitiveFieldName");
/**
 * ANTLR4 grammar
 * ```
 * requiredToken : literal | primitiveFieldName
 * ```
 */
class RequiredTokenVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(requiredTokenCtx) {
        const childCtx = requiredTokenCtx.children[0];
        if (childCtx instanceof ASN_3gppParser_1.LiteralContext) {
            return childCtx.accept(new literal_1.LiteralVisitor());
        }
        if (childCtx instanceof ASN_3gppParser_1.PrimitiveFieldNameContext) {
            return childCtx.accept(new primitiveFieldName_1.PrimitiveFieldNameVisitor());
        }
    }
}
exports.RequiredTokenVisitor = RequiredTokenVisitor;
