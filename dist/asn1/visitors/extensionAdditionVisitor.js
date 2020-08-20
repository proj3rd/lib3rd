"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const ASN_3gppParser_1 = require("../grammar/ASN_3gppParser");
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
        if (childCtx instanceof ASN_3gppParser_1.ComponentTypeContext) {
            return childCtx.accept(new componentTypeVisitor_1.ComponentTypeVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.ExtensionAdditionGroupContext) {
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