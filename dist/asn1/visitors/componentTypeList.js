"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const componentType_1 = require("./componentType");
const tag_1 = require("./tag");
/**
 * ANTLR4 grammar
 * ```
 * componentTypeList  : (componentType) (COMMA tag? componentType)*
 * ```
 */
class ComponentTypeListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(componentTypeListCtx) {
        const childCtxes = componentTypeListCtx.children;
        const componentTypeList = [];
        childCtxes.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.ComponentTypeContext) {
                const componentType = childCtx.accept(new componentType_1.ComponentTypeVisitor());
                if (componentType) {
                    componentTypeList.push(componentType);
                }
            }
            else if (childCtx instanceof ASN_3gppParser_1.TagContext) {
                const tag = childCtx.accept(new tag_1.TagVisitor());
                if (tag) {
                    componentTypeList[componentTypeList.length - 1].tag = tag;
                }
            }
            else {
                // Do nothing
            }
        });
        return componentTypeList;
    }
}
exports.ComponentTypeListVisitor = ComponentTypeListVisitor;
