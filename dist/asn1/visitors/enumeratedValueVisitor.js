"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
/**
 * # Grammar
 * ```
 * enumeratedValue: IDENTIFIER
 * ```
 */
class EnumeratedValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        return ctx.text;
    }
    defaultResult() {
        return '';
    }
}
exports.EnumeratedValueVisitor = EnumeratedValueVisitor;
//# sourceMappingURL=enumeratedValueVisitor.js.map