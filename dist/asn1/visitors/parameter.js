"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const paramGovernor_1 = require("./paramGovernor");
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
        const { children } = parameterCtx;
        const parameter = {
            paramGovernor: undefined,
            parameterName: undefined,
        };
        if (children[0] instanceof ASN_3gppParser_1.ParamGovernorContext) {
            parameter.paramGovernor = children[0].accept(new paramGovernor_1.ParamGovernorVisitor());
            parameter.parameterName = children[2].text;
        }
        else {
            parameter.parameterName = children[0].text;
        }
        return parameter;
    }
}
exports.ParameterVisitor = ParameterVisitor;
