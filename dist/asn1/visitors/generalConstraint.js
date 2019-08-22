"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const contentsConstraint_1 = require("./contentsConstraint");
/**
 * ANTLR4 grammar
 * ```
 * generalConstraint :  userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
class GeneralConstraintVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(generalConstraintCtx) {
        const childCtx = generalConstraintCtx.children[0];
        let generalConstraint;
        if (childCtx instanceof ASN_3gppParser_1.UserDefinedConstraintContext) {
            logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'UserDefinedConstraint not supported:'));
        }
        else if (childCtx instanceof ASN_3gppParser_1.TableConstraintContext) {
            logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'TableConstraint not supported:'));
        }
        else if (childCtx instanceof ASN_3gppParser_1.ContentsConstraintContext) {
            generalConstraint = childCtx.accept(new contentsConstraint_1.ContentsConstraintVisitor());
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'Not supported ASN1:'));
        }
        return generalConstraint;
    }
}
exports.GeneralConstraintVisitor = GeneralConstraintVisitor;
