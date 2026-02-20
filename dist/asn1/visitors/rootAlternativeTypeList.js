"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootAlternativeTypeListVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const alternativeTypeListVisitor_1 = require("./alternativeTypeListVisitor");
/**
 * # Grammar
 * ```
 * rootAlternativeTypeList: alternativeTypeList
 * ```
 */
class RootAlternativeTypeListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const alternativeTypeListCtx = ctx.alternativeTypeList();
        return alternativeTypeListCtx.accept(new alternativeTypeListVisitor_1.AlternativeTypeListVisitor());
    }
    defaultResult() {
        return [];
    }
}
exports.RootAlternativeTypeListVisitor = RootAlternativeTypeListVisitor;
//# sourceMappingURL=rootAlternativeTypeList.js.map