"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * enumerationItem : IDENTIFIER | namedNumber | value
 * ```
 */
class EnumerationItemVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(enumerationItemCtx) {
        const childCtx = enumerationItemCtx.children[0];
        let enumerationItem;
        if (childCtx instanceof TerminalNode_1.TerminalNode) {
            enumerationItem = childCtx.text;
        }
        else if (childCtx instanceof ASN_3gppParser_1.NamedNumberContext) {
            logging_1.log.warn(utils_1.getLogWithAsn1(enumerationItemCtx, 'NamedNumber not supported:'));
        }
        else if (childCtx instanceof ASN_3gppParser_1.ValueContext) {
            enumerationItem = childCtx.accept(new value_1.ValueVisitor());
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(enumerationItemCtx, 'Not supported ASN1:'));
        }
        return enumerationItem;
    }
}
exports.EnumerationItemVisitor = EnumerationItemVisitor;
