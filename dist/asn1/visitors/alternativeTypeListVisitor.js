"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const namedTypeVisitor_1 = require("./namedTypeVisitor");
/**
 * # Grammar
 * ```
 * alternativeTypeList: (namedType) (COMMA namedType)*
 * ```
 */
class AlternativeTypeListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const namedTypeCtxes = ctx.namedType();
        return namedTypeCtxes.map((namedTypeCtx) => namedTypeCtx.accept(new namedTypeVisitor_1.NamedTypeVisitor()));
    }
    defaultResult() {
        return [];
    }
}
exports.AlternativeTypeListVisitor = AlternativeTypeListVisitor;
//# sourceMappingURL=alternativeTypeListVisitor.js.map