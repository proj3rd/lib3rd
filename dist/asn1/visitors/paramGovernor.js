"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const TerminalNode_1 = require("antlr4ts/tree/TerminalNode");
const logging_1 = require("../../utils/logging");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const utils_1 = require("../utils");
const governor_1 = require("./governor");
/**
 * ANTLR4 grammar
 * ```
 * paramGovernor : governor | IDENTIFIER
 * ```
 */
class ParamGovernorVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(paramGovernorCtx) {
        const { children } = paramGovernorCtx;
        if (children[0] instanceof ASN_3gppParser_1.GovernorContext) {
            return children[0].accept(new governor_1.GovernorVisitor());
        }
        else if (children[0] instanceof TerminalNode_1.TerminalNode) {
            return children[0].text;
        }
        else {
            logging_1.log.warn(new Error(utils_1.getLogWithAsn1(paramGovernorCtx, 'Unknown ASN.1')));
        }
    }
}
exports.ParamGovernorVisitor = ParamGovernorVisitor;
