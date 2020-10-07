"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const parameter_1 = require("../classes/parameter");
const paramGovernorVisitor_1 = require("./paramGovernorVisitor");
/**
 * # Grammar
 * ```
 * parameter: (paramGovernor COLON)? IDENTIFIER
 * ```
 */
class ParameterVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const { childCount } = ctx;
        const paramGovernorCtx = ctx.paramGovernor();
        const paramGovernor = paramGovernorCtx === undefined
            ? undefined
            : paramGovernorCtx.accept(new paramGovernorVisitor_1.ParamGovernorVisitor());
        const dummyReferenceCtx = ctx.getChild(childCount - 1);
        const dummyReference = dummyReferenceCtx.text;
        return new parameter_1.Parameter(dummyReference, paramGovernor);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ParameterVisitor = ParameterVisitor;
//# sourceMappingURL=parameterVisitor.js.map