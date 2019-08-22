"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const extensionAdditionGroup_1 = require("../classes/extensionAdditionGroup");
const componentTypeList_1 = require("./componentTypeList");
const tag_1 = require("./tag");
const versionNumber_1 = require("./versionNumber");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionGroup  :  DOUBLE_L_BRACKET  versionNumber  componentTypeList tag?  DOUBLE_R_BRACKET
 * ```
 */
class ExtensionAdditionGroupVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(extensionAdditionGroupCtx) {
        const childCtxes = extensionAdditionGroupCtx.children;
        const versionNumberCtx = childCtxes[1];
        const versionNumber = versionNumberCtx.accept(new versionNumber_1.VersionNumberVisitor());
        const componentTypeListCtx = childCtxes[2];
        const componentTypeList = componentTypeListCtx.accept(new componentTypeList_1.ComponentTypeListVisitor());
        if (childCtxes[3] instanceof ASN_3gppParser_1.TagContext) {
            const tag = childCtxes[3].accept(new tag_1.TagVisitor());
            if (tag) {
                componentTypeList[componentTypeList.length - 1].tag = tag;
            }
        }
        return new extensionAdditionGroup_1.ExtensionAdditionGroup(componentTypeList, versionNumber);
    }
}
exports.ExtensionAdditionGroupVisitor = ExtensionAdditionGroupVisitor;
