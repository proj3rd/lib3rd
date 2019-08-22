"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const actualParameter_1 = require("./actualParameter");
/**
 * ANTLR4 grammar
 * ```
 * actualParameterList : L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
class ActualParameterListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(actualParameterListCtx) {
        const actualParameterList = [];
        const childCtxes = actualParameterListCtx.children;
        childCtxes.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.ActualParameterContext) {
                actualParameterList.push(childCtx.accept(new actualParameter_1.ActualParameterVisitor()));
            }
            else if (childCtx instanceof TerminalNode_1.TerminalNode) {
                // Do nothing
            }
            else {
                logging_1.log.warn(utils_1.getLogWithAsn1(actualParameterListCtx, 'Not supported ASN.1'));
            }
        });
        return actualParameterList;
    }
}
exports.ActualParameterListVisitor = ActualParameterListVisitor;
