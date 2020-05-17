"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const parameter_1 = require("../classes/parameter");
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
        let paramGovernor;
        let dummyReference;
        if (children[0] instanceof ASN_3gppParser_1.ParamGovernorContext) {
            paramGovernor = children[0].accept(new paramGovernor_1.ParamGovernorVisitor());
            dummyReference = children[2].text;
        }
        else {
            dummyReference = children[0].text;
        }
        return new parameter_1.Parameter(paramGovernor, dummyReference);
    }
}
exports.ParameterVisitor = ParameterVisitor;
