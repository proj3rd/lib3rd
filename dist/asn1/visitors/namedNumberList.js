"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const namedNumber_1 = require("./namedNumber");
/**
 * ANTLR4 grammar
 * ```
 * namedNumberList : (namedNumber) (COMMA namedNumber)*
 * ```
 */
class NamedNumberListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(namedNumberListCtx) {
        const namedNumberList = {};
        const { children } = namedNumberListCtx;
        children
            .filter((childCtx) => childCtx instanceof ASN_3gppParser_1.NamedNumberContext)
            .forEach((namedNumberCtx) => {
            const { name, num } = namedNumberCtx.accept(new namedNumber_1.NamedNumberVisitor());
            namedNumberList[name] = num;
        });
        return namedNumberList;
    }
}
exports.NamedNumberListVisitor = NamedNumberListVisitor;
