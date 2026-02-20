"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithSyntaxSpecVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const syntaxListVisitor_1 = require("./syntaxListVisitor");
/**
 * # Grammar
 * ```
 * withSyntaxSpec: WITH_LITERAL SYNTAX_LITERAL syntaxList
 * ```
 */
class WithSyntaxSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const syntaxListCtx = ctx.syntaxList();
        const syntaxList = syntaxListCtx.accept(new syntaxListVisitor_1.SyntaxListVisitor());
        return syntaxList;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.WithSyntaxSpecVisitor = WithSyntaxSpecVisitor;
//# sourceMappingURL=withSyntaxSpecVisitor.js.map