"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequiredTokenVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const literalVisitor_1 = require("./literalVisitor");
const primitiveFieldNameVisitor_1 = require("./primitiveFieldNameVisitor");
/**
 * # Grammar
 * ```
 * requiredToken: literal | primitiveFieldName
 * ```
 */
class RequiredTokenVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof grammar3rdParser_1.LiteralContext) {
            return childCtx.accept(new literalVisitor_1.LiteralVisitor());
        }
        if (childCtx instanceof grammar3rdParser_1.PrimitiveFieldNameContext) {
            return childCtx.accept(new primitiveFieldNameVisitor_1.PrimitiveFieldNameVisitor());
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.RequiredTokenVisitor = RequiredTokenVisitor;
//# sourceMappingURL=requiredTokenVisitor.js.map