"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const syntaxList_1 = require("./syntaxList");
const tokenOrGroupSpec_1 = require("./tokenOrGroupSpec");
/**
 * ANTLR4 grammar
 * ```
 * optionalGroup : L_BRACKET (tokenOrGroupSpec)+ R_BRACKET
 * ```
 */
class OptionalGroupVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(optionalGroupCtx) {
        const childCtxes = optionalGroupCtx.children.slice(1, -1);
        const tokenOrGroupSpecs = childCtxes.map((childCtx) => childCtx.accept(new tokenOrGroupSpec_1.TokenOrGroupSpecVisitor()));
        return syntaxList_1.syntaxesFrom(tokenOrGroupSpecs, true)[0];
    }
}
exports.OptionalGroupVisitor = OptionalGroupVisitor;
