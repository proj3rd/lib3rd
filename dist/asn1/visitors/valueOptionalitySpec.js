"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * valueOptionalitySpec : OPTIONAL_LITERAL | (DEFAULT_LITERAL value)
 * ```
 */
class ValueOptionalitySpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(valueOptionalitySpecCtx) {
        const [, valueCtx] = valueOptionalitySpecCtx.children;
        if (valueCtx) {
            return {
                optional: undefined,
                default: valueCtx.accept(new value_1.ValueVisitor()),
            };
        }
        else {
            return {
                optional: true,
            };
        }
    }
}
exports.ValueOptionalitySpecVisitor = ValueOptionalitySpecVisitor;
