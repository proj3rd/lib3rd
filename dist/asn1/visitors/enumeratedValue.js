"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * ANTLR4 grammar
 * ```
 * enumeratedValue  : IDENTIFIER
 * ```
 */
class EnumeratedValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return '';
    }
    visitChildren(enumeratedValueCtx) {
        return enumeratedValueCtx.text;
    }
}
exports.EnumeratedValueVisitor = EnumeratedValueVisitor;
