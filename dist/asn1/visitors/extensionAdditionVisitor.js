"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const componentTypeVisitor_1 = require("./componentTypeVisitor");
const extensionAdditionGroupVisitor_1 = require("./extensionAdditionGroupVisitor");
/**
 * # Grammar
 * ```
 * extensionAddition: componentType | extensionAdditionGroup
 * ```
 */
class ExtensionAdditionVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const childCtx = ctx.getChild(0);
        if (childCtx instanceof grammar3rdParser_1.ComponentTypeContext) {
            return childCtx.accept(new componentTypeVisitor_1.ComponentTypeVisitor());
        }
        if (childCtx instanceof grammar3rdParser_1.ExtensionAdditionGroupContext) {
            return childCtx.accept(new extensionAdditionGroupVisitor_1.ExtensionAdditionGroupVisitor());
        }
        throw Error();
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ExtensionAdditionVisitor = ExtensionAdditionVisitor;
//# sourceMappingURL=extensionAdditionVisitor.js.map