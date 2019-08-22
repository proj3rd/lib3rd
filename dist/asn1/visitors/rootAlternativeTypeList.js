"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const alternativeTypeList_1 = require("./alternativeTypeList");
/**
 * ANTLR4 grammar
 * ```
 * rootAlternativeTypeList  : alternativeTypeList
 * ```
 */
class RootAlternativeTypeListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(rootAlternativeTypeListCtx) {
        const alternativeTypeListCtx = rootAlternativeTypeListCtx.children[0];
        return alternativeTypeListCtx.accept(new alternativeTypeList_1.AlternativeTypeListVisitor());
    }
}
exports.RootAlternativeTypeListVisitor = RootAlternativeTypeListVisitor;
