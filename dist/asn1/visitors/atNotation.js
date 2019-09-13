"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const utils_1 = require("../utils");
/**
 * ANTLR4 grammar
 * ```
 * atNotation :  (A_ROND | (A_ROND_DOT level)) componentIdList
 * componentIdList : IDENTIFIER (DOT IDENTIFIER)*  //?????
 * ```
 */
class AtNotationVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(atNotationCtx) {
        let componentIdList;
        atNotationCtx.children.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.LevelContext) {
                logging_1.log.warn(new Error('Level not supported'));
            }
            else if (childCtx instanceof ASN_3gppParser_1.ComponentIdListContext) {
                componentIdList = childCtx.text;
            }
            else if (childCtx instanceof TerminalNode_1.TerminalNode) {
                // Do nothing
            }
            else {
                logging_1.log.warn(new Error(utils_1.getLogWithAsn1(atNotationCtx, 'Not supported ASN.1:')).stack);
            }
        });
        return componentIdList;
    }
}
exports.AtNotationVisitor = AtNotationVisitor;
