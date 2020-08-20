"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const integerValue_1 = require("../classes/integerValue");
const signedNumberVisitor_1 = require("./signedNumberVisitor");
/**
 * # Grammar
 * ```
 * integerValue: signedNumber | IDENTIFIER
 * ```
 */
class IntegerValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const signedNumberCtx = ctx.signedNumber();
        let literal;
        if (signedNumberCtx !== undefined) {
            literal = signedNumberCtx.accept(new signedNumberVisitor_1.SignedNumberVisitor());
        }
        else {
            literal = ctx.text;
        }
        return new integerValue_1.IntegerValue(literal);
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.IntegerValueVisitor = IntegerValueVisitor;
//# sourceMappingURL=integerValueVisitor.js.map