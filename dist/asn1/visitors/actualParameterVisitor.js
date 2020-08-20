"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const ASN_3gppParser_1 = require("../grammar/ASN_3gppParser");
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
        if (childCtx instanceof ASN_3gppParser_1.AsnTypeContext) {
            return childCtx.accept(new asnTypeVisitor_1.AsnTypeVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.ValueContext) {
            return childCtx.accept(new valueVisitor_1.ValueVisitor());
        }
        else {
            throw Error();
        }
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ActualParameterVisitor = ActualParameterVisitor;
//# sourceMappingURL=actualParameterVisitor.js.map