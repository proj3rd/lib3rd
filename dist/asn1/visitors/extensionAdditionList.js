"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const namedType_1 = require("../classes/namedType");
const extensionAddition_1 = require("./extensionAddition");
const tag_1 = require("./tag");
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionList  :  (extensionAddition) (COMMA tag? extensionAddition)*
 * ```
 */
class ExtensionAdditionListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(extensionAdditionListCtx) {
        const childCtxes = extensionAdditionListCtx.children;
        const extensionAdditionList = [];
        childCtxes.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.ExtensionAdditionContext) {
                extensionAdditionList.push(childCtx.accept(new extensionAddition_1.ExtensionAdditionVisitor()));
            }
            else if (childCtx instanceof ASN_3gppParser_1.TagContext) {
                const tag = childCtx.accept(new tag_1.TagVisitor());
                const lastItem = extensionAdditionList[extensionAdditionList.length - 1];
                if (tag && lastItem instanceof namedType_1.NamedType) {
                    lastItem.tag = tag;
                }
            }
            else if (childCtx instanceof TerminalNode_1.TerminalNode) {
                // Do nothing
            }
            else {
                logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'Not supported ASN.1 in ExtensionAdditionList'));
            }
        });
        return extensionAdditionList;
    }
}
exports.ExtensionAdditionListVisitor = ExtensionAdditionListVisitor;
