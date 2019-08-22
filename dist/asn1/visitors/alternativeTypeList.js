"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const namedType_1 = require("./namedType");
/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeList : (namedType) (COMMA namedType)*
 * ```
 */
class AlternativeTypeListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(alternativeTypeListCtx) {
        const childCtxes = alternativeTypeListCtx.children;
        const alternativeTypeList = [];
        childCtxes.forEach((childCtx, index) => {
            if (index % 2) {
                return;
            }
            alternativeTypeList.push(childCtx.accept(new namedType_1.NamedTypeVisitor()));
        });
        return alternativeTypeList;
    }
}
exports.AlternativeTypeListVisitor = AlternativeTypeListVisitor;
