"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * ANTLR4 grammar
 * ```
 * primitiveFieldName : AMPERSAND IDENTIFIER;
 * ```
 */
class PrimitiveFieldNameVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(primitiveFieldNameCtx) {
        return primitiveFieldNameCtx.text;
    }
}
exports.PrimitiveFieldNameVisitor = PrimitiveFieldNameVisitor;
