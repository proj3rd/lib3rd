"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuiltinValueVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
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
        if (childCtx instanceof grammar3rdParser_1.EnumeratedValueContext) {
            return childCtx.accept(new enumeratedValueVisitor_1.EnumeratedValueVisitor());
        }
        if (childCtx instanceof grammar3rdParser_1.IntegerValueContext) {
            return childCtx.accept(new integerValueVisitor_1.IntegerValueVisitor());
        }
        if (childCtx instanceof grammar3rdParser_1.ChoiceValueContext) {
            return unimpl_1.unimpl(ctx.text);
        }
        if (childCtx instanceof grammar3rdParser_1.ObjectIdentifierValueContext) {
            return childCtx.accept(new objectIdentifierValueVisitor_1.ObjectIdentifierValueVisitor());
        }
        if (childCtx instanceof grammar3rdParser_1.BooleanValueContext) {
            return childCtx.accept(new booleanValueVisitor_1.BooleanValueVisitor());
        }
        return ctx.text;
    }
    defaultResult() {
        return '';
    }
}
exports.BuiltinValueVisitor = BuiltinValueVisitor;
//# sourceMappingURL=builtinValueVisitor.js.map