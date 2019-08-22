"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const constraintSpec_1 = require("./constraintSpec");
/**
 * ANTLR4 grammar
 * ```
 * constraint :L_PARAN constraintSpec  exceptionSpec? R_PARAN
 * ```
 */
class ConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(constraintCtx) {
        const childCtxes = constraintCtx.children;
        const constraintSpecCtx = childCtxes[1];
        const constraint = constraintSpecCtx.accept(new constraintSpec_1.ConstraintSpecVisitor());
        if (childCtxes[2] instanceof ASN_3gppParser_1.ExceptionSpecContext) {
            logging_1.log.warn(utils_1.getLogWithAsn1(constraintCtx, 'ExceptionSpec not supported:'));
        }
        return constraint;
    }
}
exports.ConstraintVisitor = ConstraintVisitor;
