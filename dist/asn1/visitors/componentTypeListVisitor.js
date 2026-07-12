"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentTypeListVisitor = void 0;
/* eslint-disable class-methods-use-this */
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const grammar3rdParser_1 = require("../grammar/grammar3rdParser");
const componentTypeVisitor_1 = require("./componentTypeVisitor");
const tagVisitor_1 = require("./tagVisitor");
/**
 * # Grammar
 * ```
 * componentTypeList: (componentType) (COMMA tag? componentType)*
 * ```
 */
class ComponentTypeListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    visitChildren(ctx) {
        const sequenceComponents = [];
        const { childCount } = ctx;
        for (let i = 0; i < childCount; i += 1) {
            const childCtx = ctx.getChild(i);
            if (childCtx instanceof grammar3rdParser_1.ComponentTypeContext) {
                sequenceComponents.push(childCtx.accept(new componentTypeVisitor_1.ComponentTypeVisitor()));
            }
            else if (childCtx instanceof grammar3rdParser_1.TagContext) {
                const tag = childCtx.accept(new tagVisitor_1.TagVisitor());
                const { length } = sequenceComponents;
                const lastComponent = sequenceComponents[length - 1];
                if (lastComponent === undefined) {
                    throw Error();
                }
                lastComponent.tag = tag;
            }
        }
        return sequenceComponents;
    }
    defaultResult() {
        return [];
    }
}
exports.ComponentTypeListVisitor = ComponentTypeListVisitor;
//# sourceMappingURL=componentTypeListVisitor.js.map