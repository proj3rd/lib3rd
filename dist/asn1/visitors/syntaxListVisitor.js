"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const primitiveFieldName_1 = require("../classes/primitiveFieldName");
const syntax_1 = require("../classes/syntax");
const tokenOrGroupSepcVisitor_1 = require("./tokenOrGroupSepcVisitor");
/**
 * # Grammar
 * ```
 * syntaxList: L_BRACE tokenOrGroupSpec+ R_BRACE
 * ```
 * Currently, only supports `string[] PrimitiveFieldName` form
 */
class SyntaxListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const tokenOrGroupSpecCtxes = ctx.tokenOrGroupSpec();
        const tokenOrGroupSpecs = tokenOrGroupSpecCtxes.map((tokenOrGroupSpecCtx) => tokenOrGroupSpecCtx.accept(new tokenOrGroupSepcVisitor_1.TokenOrGroupSpecVisitor()));
        const syntaxList = [];
        const arrToLiteral = [];
        tokenOrGroupSpecs.forEach((tokenOrGroupSpec) => {
            if (typeof tokenOrGroupSpec === 'string') {
                arrToLiteral.push(tokenOrGroupSpec);
            }
            else if (tokenOrGroupSpec instanceof primitiveFieldName_1.PrimitiveFieldName) {
                if (arrToLiteral.length === 0) {
                    throw Error();
                }
                const literal = arrToLiteral.join(' ');
                const syntax = new syntax_1.Syntax(literal, tokenOrGroupSpec, false);
                syntaxList.push(syntax);
                arrToLiteral.length = 0;
            }
            else if (tokenOrGroupSpec instanceof syntax_1.Syntax) {
                syntaxList.push(tokenOrGroupSpec);
            }
        });
        return syntaxList;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.SyntaxListVisitor = SyntaxListVisitor;
//# sourceMappingURL=syntaxListVisitor.js.map