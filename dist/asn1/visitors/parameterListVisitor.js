"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParameterListVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const parameterVisitor_1 = require("./parameterVisitor");
/**
 * # Grammar
 * ```
 * parameterList: L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
class ParameterListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const parameterCtxes = ctx.parameter();
        return parameterCtxes.map((parameterCtx) => parameterCtx.accept(new parameterVisitor_1.ParameterVisitor()));
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ParameterListVisitor = ParameterListVisitor;
//# sourceMappingURL=parameterListVisitor.js.map