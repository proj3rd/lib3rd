"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValueVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const builtinValueVisitor_1 = require("./builtinValueVisitor");
/**
 * # Grammar
 * ```
 * value: builtinValue
 * ```
 */
class ValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const builtinValueCtx = ctx.builtinValue();
        return builtinValueCtx.accept(new builtinValueVisitor_1.BuiltinValueVisitor());
    }
    defaultResult() {
        return '';
    }
}
exports.ValueVisitor = ValueVisitor;
//# sourceMappingURL=valueVisitor.js.map