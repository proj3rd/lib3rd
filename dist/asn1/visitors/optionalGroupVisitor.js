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
 * optionalGroup: L_BRACKET (tokenOrGroupSpec)+ R_BRACKET
 * ```
 * Currently, only supports `[string[] PrimitiveFieldName]` form
 */
class OptionalGroupVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const tokenOrGroupSpecCtxes = ctx.tokenOrGroupSpec();
        const tokenOrGroupSpecs = tokenOrGroupSpecCtxes.map((tokenOrGroupSpecCtx) => tokenOrGroupSpecCtx.accept(new tokenOrGroupSepcVisitor_1.TokenOrGroupSpecVisitor()));
        const arrToLiteral = [];
        let primitiveFieldName;
        tokenOrGroupSpecs.forEach((tokenOrGroupSpec) => {
            if (typeof tokenOrGroupSpec === 'string') {
                arrToLiteral.push(tokenOrGroupSpec);
            }
            if (tokenOrGroupSpec instanceof primitiveFieldName_1.PrimitiveFieldName) {
                if (arrToLiteral.length === 0) {
                    throw Error();
                }
                primitiveFieldName = tokenOrGroupSpec;
            }
        });
        if (primitiveFieldName === undefined) {
            throw Error();
        }
        const literal = arrToLiteral.join(' ');
        return new syntax_1.Syntax(literal, primitiveFieldName, true);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.OptionalGroupVisitor = OptionalGroupVisitor;
//# sourceMappingURL=optionalGroupVisitor.js.map