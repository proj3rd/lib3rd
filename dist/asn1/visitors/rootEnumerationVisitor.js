"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const enumerationVisitor_1 = require("./enumerationVisitor");
/**
 * # Grammar
 * ```
 * rootEnumeration: enumeration
 * ```
 */
class RootEnumerationVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const enumerationCtx = ctx.enumeration();
        return enumerationCtx.accept(new enumerationVisitor_1.EnumerationVisitor());
    }
    defaultResult() {
        return [];
    }
}
exports.RootEnumerationVisitor = RootEnumerationVisitor;
//# sourceMappingURL=rootEnumerationVisitor.js.map