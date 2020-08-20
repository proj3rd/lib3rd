"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
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