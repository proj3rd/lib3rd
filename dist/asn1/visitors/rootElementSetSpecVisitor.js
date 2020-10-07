"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const elementSetSpecVisitor_1 = require("./elementSetSpecVisitor");
/**
 * # Grammar
 * ```
 * rootElementSetSpec: elementSetSpec
 * ```
 */
class RootElementSetSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const elementSetSpecCtx = ctx.elementSetSpec();
        return elementSetSpecCtx.accept(new elementSetSpecVisitor_1.ElementSetSpecVisitor());
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.RootElementSetSpecVisitor = RootElementSetSpecVisitor;
//# sourceMappingURL=rootElementSetSpecVisitor.js.map