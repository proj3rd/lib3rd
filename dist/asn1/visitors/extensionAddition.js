"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const componentType_1 = require("./componentType");
const extensionAdditionGroup_1 = require("./extensionAdditionGroup");
/**
 * ANTLR4 grammar
 * ```
 * extensionAddition  : componentType  |  extensionAdditionGroup
 * ```
 */
class ExtensionAdditionVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(extensionAdditionCtx) {
        const childCtx = extensionAdditionCtx.children[0];
        let extensionAddition;
        if (childCtx instanceof ASN_3gppParser_1.ComponentTypeContext) {
            extensionAddition = childCtx.accept(new componentType_1.ComponentTypeVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.ExtensionAdditionGroupContext) {
            extensionAddition = childCtx.accept(new extensionAdditionGroup_1.ExtensionAdditionGroupVisitor());
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(extensionAdditionCtx, 'Not supported ASN1:'));
        }
        return extensionAddition;
    }
}
exports.ExtensionAdditionVisitor = ExtensionAdditionVisitor;
