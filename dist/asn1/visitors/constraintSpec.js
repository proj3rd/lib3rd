"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const generalConstraint_1 = require("./generalConstraint");
const subtypeConstraint_1 = require("./subtypeConstraint");
/**
 * ANTLR4 grammar
 * ```
 * constraintSpec : generalConstraint | subtypeConstraint
 * ```
 */
class ConstraintSpecVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(constraintSpecCtx) {
        const childCtx = constraintSpecCtx.children[0];
        let constraintSpec;
        if (childCtx instanceof ASN_3gppParser_1.GeneralConstraintContext) {
            constraintSpec = childCtx.accept(new generalConstraint_1.GeneralConstraintVisitor());
        }
        else if (childCtx instanceof ASN_3gppParser_1.SubtypeConstraintContext) {
            constraintSpec = childCtx.accept(new subtypeConstraint_1.SubtypeConstraintVisitor());
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(constraintSpecCtx, 'Not supported ASN1:'));
        }
        return constraintSpec;
    }
}
exports.ConstraintSpecVisitor = ConstraintSpecVisitor;
