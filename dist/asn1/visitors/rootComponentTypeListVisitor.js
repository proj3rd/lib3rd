"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootComponentTypeListVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const componentTypeListVisitor_1 = require("./componentTypeListVisitor");
/**
 * # Grammar
 * ```
 * rootComponentTypeList: componentTypeList
 * ```
 */
class RootComponentTypeListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const componentTypeListCtx = ctx.componentTypeList();
        return componentTypeListCtx.accept(new componentTypeListVisitor_1.ComponentTypeListVisitor());
    }
    defaultResult() {
        return [];
    }
}
exports.RootComponentTypeListVisitor = RootComponentTypeListVisitor;
//# sourceMappingURL=rootComponentTypeListVisitor.js.map