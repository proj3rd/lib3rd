"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * ANTLR4 grammar
 * ```
 * literal : IDENTIFIER | COMMA
 * ```
 */
class LiteralVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(literalCtx) {
        return literalCtx.text;
    }
}
exports.LiteralVisitor = LiteralVisitor;
