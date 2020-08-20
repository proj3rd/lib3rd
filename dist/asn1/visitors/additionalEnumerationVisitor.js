"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const enumerationVisitor_1 = require("./enumerationVisitor");
/**
 * # Grammar
 * ```
 * additionalEnumeration: enumeration
 * ```
 */
class AdditionalEnumerationVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const enumerationCtx = ctx.enumeration();
        return enumerationCtx.accept(new enumerationVisitor_1.EnumerationVisitor());
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.AdditionalEnumerationVisitor = AdditionalEnumerationVisitor;
//# sourceMappingURL=additionalEnumerationVisitor.js.map