"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualParameterListVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const actualParameterVisitor_1 = require("./actualParameterVisitor");
/**
 * # Grammar
 * ```
 * actualParameterList: L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
class ActualParameterListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const actualParameterCtxes = ctx.actualParameter();
        return actualParameterCtxes
            .map((actualParameterCtx) => actualParameterCtx.accept(new actualParameterVisitor_1.ActualParameterVisitor()));
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ActualParameterListVisitor = ActualParameterListVisitor;
//# sourceMappingURL=actualParameterListVisitor.js.map