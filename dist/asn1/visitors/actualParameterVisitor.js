"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualParameterVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("../../utils/unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const asnTypeVisitor_1 = require("./asnTypeVisitor");
const valueVisitor_1 = require("./valueVisitor");
/**
 * # Grammar
 * ```
 * actualParameter: asnType | value
 * ```
 */
class ActualParameterVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof grammar3rdParser_1.AsnTypeContext) {
            return childCtx.accept(new asnTypeVisitor_1.AsnTypeVisitor());
        }
        if (childCtx instanceof grammar3rdParser_1.ValueContext) {
            return childCtx.accept(new valueVisitor_1.ValueVisitor());
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ActualParameterVisitor = ActualParameterVisitor;
//# sourceMappingURL=actualParameterVisitor.js.map