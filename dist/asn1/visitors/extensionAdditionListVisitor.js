"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const unimpl_1 = require("unimpl");
const componentType_1 = require("../classes/componentType");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const extensionAdditionVisitor_1 = require("./extensionAdditionVisitor");
const tagVisitor_1 = require("./tagVisitor");
/**
 * # Grammar
 * ```
 * extensionAdditionList: (extensionAddition) (COMMA tag? extensionAddition)*
 * ```
 */
class ExtensionAdditionListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const extensionAdditionList = [];
        for (let i = 0; i < ctx.childCount; i += 1) {
            const childCtx = ctx.getChild(i);
            if (childCtx instanceof grammar3rdParser_1.ExtensionAdditionContext) {
                extensionAdditionList.push(childCtx.accept(new extensionAdditionVisitor_1.ExtensionAdditionVisitor()));
            }
            else if (childCtx instanceof grammar3rdParser_1.TagContext) {
                const tag = childCtx.accept(new tagVisitor_1.TagVisitor());
                const { length } = extensionAdditionList;
                const lastComponent = extensionAdditionList[length - 1];
                if (lastComponent instanceof componentType_1.ComponentType) {
                    lastComponent.tag = tag;
                }
                else {
                    throw Error();
                }
            }
        }
        return extensionAdditionList;
    }
    defaultResult() {
        return unimpl_1.unimpl();
    }
}
exports.ExtensionAdditionListVisitor = ExtensionAdditionListVisitor;
//# sourceMappingURL=extensionAdditionListVisitor.js.map