"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const withSyntaxSpec_1 = require("../classes/withSyntaxSpec");
const syntaxList_1 = require("./syntaxList");
/**
 * ANTLR4 grammar
 * ```
 * withSyntaxSpec : WITH_LITERAL SYNTAX_LITERAL syntaxList
 * ```
 */
class WithSyntaxSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(withSyntaxSpecCtx) {
        const syntaxListCtx = withSyntaxSpecCtx.children[0];
        return new withSyntaxSpec_1.WithSyntaxSpec(syntaxListCtx.accept(new syntaxList_1.SyntaxListVisitor()));
    }
}
exports.WithSyntaxSpecVisitor = WithSyntaxSpecVisitor;
