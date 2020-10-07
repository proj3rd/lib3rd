"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const enumerationItemVisitor_1 = require("./enumerationItemVisitor");
/**
 * # Grammar
 * ```
 * enumeration: enumerationItem (COMMA enumerationItem)*
 * ```
 */
class EnumerationVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const enumerationItemCtxes = ctx.enumerationItem();
        return enumerationItemCtxes
            .map((enumerationItemCtx) => enumerationItemCtx.accept(new enumerationItemVisitor_1.EnumerationItemVisitor()));
    }
    defaultResult() {
        return [];
    }
}
exports.EnumerationVisitor = EnumerationVisitor;
//# sourceMappingURL=enumerationVisitor.js.map