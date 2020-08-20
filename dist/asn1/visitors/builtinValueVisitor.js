"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const ASN_3gppParser_1 = require("../grammar/ASN_3gppParser");
const booleanValueVisitor_1 = require("./booleanValueVisitor");
const enumeratedValueVisitor_1 = require("./enumeratedValueVisitor");
const integerValueVisitor_1 = require("./integerValueVisitor");
const objectIdentifierValueVisitor_1 = require("./objectIdentifierValueVisitor");
/**
 * # Grammar
 * ```
 * builtinValue :
 *   enumeratedValue
 *   | integerValue
 *   | choiceValue
 *   | objectIdentifierValue
 *   | booleanValue
 *   | CSTRING
 *   | BSTRING
 * ```
 */
class BuiltinValueVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof ASN_3gppParser_1.EnumeratedValueContext) {
            return childCtx.accept(new enumeratedValueVisitor_1.EnumeratedValueVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.IntegerValueContext) {
            return childCtx.accept(new integerValueVisitor_1.IntegerValueVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.ChoiceValueContext) {
            return unimpl_1.unimpl(ctx.text);
        }
        else if (childCtx instanceof ASN_3gppParser_1.ObjectIdentifierValueContext) {
            return childCtx.accept(new objectIdentifierValueVisitor_1.ObjectIdentifierValueVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.BooleanValueContext) {
            return childCtx.accept(new booleanValueVisitor_1.BooleanValueVisitor());
        }
        else {
            return ctx.text;
        }
    }
    defaultResult() {
        return '';
    }
}
exports.BuiltinValueVisitor = BuiltinValueVisitor;
//# sourceMappingURL=builtinValueVisitor.js.map