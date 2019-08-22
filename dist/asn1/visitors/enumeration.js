"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const enumerationItem_1 = require("./enumerationItem");
/**
 * ANTLR4 grammar
 * ```
 * enumeration : enumerationItem ( COMMA enumerationItem)*
 * ```
 */
class EnumerationVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(enumerationCtx) {
        const childCtxes = enumerationCtx.children;
        const enumeration = [];
        childCtxes.forEach((childCtx, index) => {
            if (index % 2) {
                return;
            }
            enumeration.push(childCtx.accept(new enumerationItem_1.EnumerationItemVisitor()));
        });
        return enumeration;
    }
}
exports.EnumerationVisitor = EnumerationVisitor;
