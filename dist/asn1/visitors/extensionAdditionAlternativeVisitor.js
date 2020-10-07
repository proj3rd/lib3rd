"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const extensionAdditionAlternativesGroupVisitor_1 = require("./extensionAdditionAlternativesGroupVisitor");
const namedTypeVisitor_1 = require("./namedTypeVisitor");
/**
 * # Grammar
 * ```
 * extensionAdditionAlternative: extensionAdditionAlternativesGroup | namedType
 * ```
 */
class ExtensionAdditionAlternativeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof grammar3rdParser_1.ExtensionAdditionAlternativesGroupContext) {
            return childCtx.accept(new extensionAdditionAlternativesGroupVisitor_1.ExtensionAdditionAlternativesGroupVisitor());
        }
        if (childCtx instanceof grammar3rdParser_1.NamedTypeContext) {
            return childCtx.accept(new namedTypeVisitor_1.NamedTypeVisitor());
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ExtensionAdditionAlternativeVisitor = ExtensionAdditionAlternativeVisitor;
//# sourceMappingURL=extensionAdditionAlternativeVisitor.js.map