"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const extensionMarker_1 = require("../classes/extensionMarker");
const componentPresenceList_1 = require("./componentPresenceList");
/**
 * ANTLR4 grammar
 * ```
 * componentPresenceLists:
 *    componentPresenceList? (COMMA ELLIPSIS (COMMA componentPresenceList)?)?
 *   |  ELLIPSIS (COMMA componentPresenceList)?
 * ```
 */
class ComponentPresenceListsVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return [];
    }
    visitChildren(componentPresenceListsCtx) {
        const componentPresenceLists = [];
        const childCtxes = componentPresenceListsCtx.children;
        childCtxes.forEach((childCtx, index) => {
            if (childCtx instanceof ASN_3gppParser_1.ComponentPresenceListContext) {
                const componentPresenceList = childCtx.accept(new componentPresenceList_1.ComponentPresenceListVisitor());
                componentPresenceLists.splice(componentPresenceLists.length, 0, ...componentPresenceList);
            }
            else if (childCtx instanceof TerminalNode_1.TerminalNode) {
                switch (childCtx.text) {
                    case ',': {
                        break;
                    }
                    case '...': {
                        const extensionMarker = new extensionMarker_1.ExtensionMarker();
                        componentPresenceLists.push(extensionMarker);
                        break;
                    }
                    default: {
                        logging_1.log.warn(utils_1.getLogWithAsn1(componentPresenceListsCtx, 'Not supported ASN1:'));
                        break;
                    }
                }
            }
            else {
                logging_1.log.warn(utils_1.getLogWithAsn1(componentPresenceListsCtx, 'Not supported ASN1:'));
            }
        });
        return componentPresenceLists;
    }
}
exports.ComponentPresenceListsVisitor = ComponentPresenceListsVisitor;
