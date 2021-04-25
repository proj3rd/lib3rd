"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectClassVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const objectClassDefnVisitor_1 = require("./objectClassDefnVisitor");
/**
 * # Grammar
 * ```
 * objectClass: definedObjectClass | objectClassDefn
 * ```
 */
class ObjectClassVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof grammar3rdParser_1.DefinedObjectClassContext) {
            return unimpl_1.unimpl();
        }
        if (childCtx instanceof grammar3rdParser_1.ObjectClassDefnContext) {
            return childCtx.accept(new objectClassDefnVisitor_1.ObjectClassDefnVisitor());
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ObjectClassVisitor = ObjectClassVisitor;
//# sourceMappingURL=objectClassVisitor.js.map