"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const elementSetSpec_1 = require("./elementSetSpec");
/**
 * ANTLR4 grammar
 * rootElementSetSpec : elementSetSpec
 */
class RootElementSetSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(rootElementSetSpecCtx) {
        const elementSetSpec = rootElementSetSpecCtx.children[0];
        return elementSetSpec.accept(new elementSetSpec_1.ElementSetSpecVisitor());
    }
}
exports.RootElementSetSpecVisitor = RootElementSetSpecVisitor;
