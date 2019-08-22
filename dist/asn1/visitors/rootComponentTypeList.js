"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const componentTypeList_1 = require("./componentTypeList");
/**
 * ANTLR4 grammar
 * ```
 * rootComponentTypeList  : componentTypeList
 * ```
 */
class RootComponentTypeListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(rootComponentTypeListCtx) {
        const componentTypeListCtx = rootComponentTypeListCtx.children[0];
        return componentTypeListCtx.accept(new componentTypeList_1.ComponentTypeListVisitor());
    }
}
exports.RootComponentTypeListVisitor = RootComponentTypeListVisitor;
