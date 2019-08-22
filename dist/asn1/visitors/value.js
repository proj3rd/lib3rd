"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const builtinValue_1 = require("./builtinValue");
/**
 * ANTLR4 grammar
 * ```
 * value  :   builtinValue
 * ```
 */
class ValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(valueCtx) {
        const builtinValueCtx = valueCtx.children[0];
        return builtinValueCtx.accept(new builtinValue_1.BuiltinValueVisitor());
    }
}
exports.ValueVisitor = ValueVisitor;
