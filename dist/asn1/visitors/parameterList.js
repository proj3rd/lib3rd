"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const parameter_1 = require("./parameter");
/**
 * ANTLR4 grammar
 * ```
 * parameterList : L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
class ParameterListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(parameterListCtx) {
        const parameterList = [];
        const childCtxes = parameterListCtx.children;
        childCtxes.forEach((childCtx) => {
            if (!(childCtx instanceof ASN_3gppParser_1.ParameterContext)) {
                return;
            }
            parameterList.push(childCtx.accept(new parameter_1.ParameterVisitor()));
        });
        return parameterList;
    }
}
exports.ParameterListVisitor = ParameterListVisitor;
