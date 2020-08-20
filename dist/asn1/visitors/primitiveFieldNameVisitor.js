"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const primitiveFieldName_1 = require("../classes/primitiveFieldName");
/**
 * # Grammar
 * ```
 * primitiveFieldName: AMPERSAND IDENTIFIER
 * ```
 */
class PrimitiveFieldNameVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const nameCtx = ctx.getChild(1);
        const name = nameCtx.text;
        return new primitiveFieldName_1.PrimitiveFieldName(name);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.PrimitiveFieldNameVisitor = PrimitiveFieldNameVisitor;
//# sourceMappingURL=primitiveFieldNameVisitor.js.map