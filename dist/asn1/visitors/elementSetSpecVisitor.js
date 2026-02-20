"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementSetSpecVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const unionsVisitor_1 = require("./unionsVisitor");
/**
 * # Grammar
 * ```
 * elementSetSpec: unions | ALL_LITERAL exclusions
 * ```
 */
class ElementSetSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const unionsCtx = ctx.unions();
        if (unionsCtx !== undefined) {
            return unionsCtx.accept(new unionsVisitor_1.UnionsVisitor());
        }
        const exclusionsCtx = ctx.exclusions();
        if (exclusionsCtx !== undefined) {
            unimpl_1.unimpl(ctx.text);
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ElementSetSpecVisitor = ElementSetSpecVisitor;
//# sourceMappingURL=elementSetSpecVisitor.js.map