"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const integer_1 = require("../classes/integer");
const namedNumberList_1 = require("./namedNumberList");
/**
 * ANTLR4 grammar
 * ```
 * integerType:INTEGER_LITERAL  (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
class IntegerTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(integerTypeCtx) {
        let namedNumberList;
        const { children } = integerTypeCtx;
        const namedNumberListCtx = children[2];
        if (namedNumberListCtx && namedNumberListCtx instanceof ASN_3gppParser_1.NamedNumberListContext) {
            namedNumberList = namedNumberListCtx.accept(new namedNumberList_1.NamedNumberListVisitor());
        }
        return new integer_1.Integer(namedNumberList);
    }
}
exports.IntegerTypeVisitor = IntegerTypeVisitor;
