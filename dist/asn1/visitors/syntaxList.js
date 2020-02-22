"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const syntax_1 = require("../classes/syntax");
const tokenOrGroupSpec_1 = require("./tokenOrGroupSpec");
function syntaxesFrom(tokens, optional = false) {
    const syntaxes = [];
    const literalArray = [];
    tokens.forEach((token) => {
        if (token instanceof syntax_1.Syntax) {
            token.optional = optional || token.optional;
            syntaxes.push(token);
        }
        else {
            if (token.startsWith('&')) {
                syntaxes.push(new syntax_1.Syntax(literalArray.join(' '), token, optional));
                literalArray.length = 0;
            }
            else {
                literalArray.push(token);
            }
        }
    });
    return syntaxes;
}
exports.syntaxesFrom = syntaxesFrom;
/**
 * ANTLR4 grammar
 * ```
 * syntaxList : L_BRACE tokenOrGroupSpec+ R_BRACE
 * ```
 */
class SyntaxListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(syntaxListCtx) {
        const childCtxes = syntaxListCtx.children.slice(1, -1);
        const tokenOrGroupSpecs = childCtxes.map((childCtx) => childCtx.accept(new tokenOrGroupSpec_1.TokenOrGroupSpecVisitor()));
        return syntaxesFrom(tokenOrGroupSpecs);
    }
}
exports.SyntaxListVisitor = SyntaxListVisitor;
