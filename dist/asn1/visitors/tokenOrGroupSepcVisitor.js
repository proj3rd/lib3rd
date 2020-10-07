"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const optionalGroupVisitor_1 = require("./optionalGroupVisitor");
const requiredTokenVisitor_1 = require("./requiredTokenVisitor");
/**
 * # Grammar
 * ```
 * tokenOrGroupSpec: requiredToken | optionalGroup
 * ```
 */
class TokenOrGroupSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof grammar3rdParser_1.RequiredTokenContext) {
            return childCtx.accept(new requiredTokenVisitor_1.RequiredTokenVisitor());
        }
        if (childCtx instanceof grammar3rdParser_1.OptionalGroupContext) {
            return childCtx.accept(new optionalGroupVisitor_1.OptionalGroupVisitor());
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.TokenOrGroupSpecVisitor = TokenOrGroupSpecVisitor;
//# sourceMappingURL=tokenOrGroupSepcVisitor.js.map