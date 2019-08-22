"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
/**
 * ANTLR4 grammar
 * ```
 * parameter : (paramGovernor COLON)? IDENTIFIER
 * ```
 */
class ParameterVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(parameterCtx) {
        const childCtxes = parameterCtx.children;
        if (childCtxes[0] instanceof ASN_3gppParser_1.ParamGovernorContext) {
            logging_1.log.warn(utils_1.getLogWithAsn1(parameterCtx, 'ParamGovernor not supported'));
            return childCtxes[2].text;
        }
        return childCtxes[0].text;
    }
}
exports.ParameterVisitor = ParameterVisitor;
