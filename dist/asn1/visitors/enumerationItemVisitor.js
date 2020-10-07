"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const booleanValue_1 = require("../classes/booleanValue");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const valueVisitor_1 = require("./valueVisitor");
/**
 * # Grammar
 * ```
 * enumerationItem: IDENTIFIER | namedNumber | value
 * ```
 */
class EnumerationItemVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof grammar3rdParser_1.NamedNumberContext) {
            unimpl_1.unimpl(ctx.text);
        }
        else if (childCtx instanceof grammar3rdParser_1.ValueContext) {
            const value = childCtx.accept(new valueVisitor_1.ValueVisitor());
            if (value instanceof booleanValue_1.BooleanValue) {
                return value.literal;
            }
            unimpl_1.unimpl();
        }
        else {
            return childCtx.text;
        }
        throw Error();
    }
    defaultResult() {
        return '';
    }
}
exports.EnumerationItemVisitor = EnumerationItemVisitor;
//# sourceMappingURL=enumerationItemVisitor.js.map