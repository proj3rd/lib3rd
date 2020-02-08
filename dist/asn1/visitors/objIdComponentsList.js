"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const objIdComponents_1 = require("./objIdComponents");
/**
 * ANTLR4 grammar
 * ```
 * objIdComponentsList: (objIdComponents) (objIdComponents)*
 * ```
 */
class ObjIdComponentsListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(objIdComponentsListCtx) {
        const { children } = objIdComponentsListCtx;
        return children.map((childCtx) => childCtx.accept(new objIdComponents_1.ObjIdComponentsVisitor()));
    }
}
exports.ObjIdComponentsListVisitor = ObjIdComponentsListVisitor;
