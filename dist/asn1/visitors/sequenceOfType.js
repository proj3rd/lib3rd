"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const sequenceOf_1 = require("../classes/sequenceOf");
const asnType_1 = require("./asnType");
const constraint_1 = require("./constraint");
const namedType_1 = require("./namedType");
const sizeConstraint_1 = require("./sizeConstraint");
/**
 * ANTLR4 grammar
 * ```
 * sequenceOfType  : SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)? OF_LITERAL (asnType | namedType )
 * ```
 */
class SequenceOfTypeVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return undefined;
    }
    visitChildren(sequenceOfTypeCtx) {
        const childCtxes = sequenceOfTypeCtx.children;
        let sequenceOfType;
        const typeCtx = childCtxes[childCtxes.length - 1];
        let type;
        if (typeCtx instanceof ASN_3gppParser_1.AsnTypeContext) {
            type = typeCtx.accept(new asnType_1.AsnTypeVisitor());
        }
        else if (typeCtx instanceof ASN_3gppParser_1.NamedTypeContext) {
            type = typeCtx.accept(new namedType_1.NamedTypeVisitor());
        }
        else {
            logging_1.log.warn(utils_1.getLogWithAsn1(sequenceOfTypeCtx, 'Not supported ASN1:'));
        }
        if (type) {
            sequenceOfType = new sequenceOf_1.SequenceOf(type);
        }
        if (sequenceOfType) {
            switch (childCtxes.length) {
                case 3: {
                    break;
                }
                case 6: {
                    const constraintCtx = childCtxes[2];
                    let constraint;
                    if (constraintCtx instanceof ASN_3gppParser_1.ConstraintContext) {
                        constraint = constraintCtx.accept(new constraint_1.ConstraintVisitor());
                    }
                    else if (constraintCtx instanceof ASN_3gppParser_1.SizeConstraintContext) {
                        constraint = constraintCtx.accept(new sizeConstraint_1.SizeConstraintVisitor());
                    }
                    else {
                        logging_1.log.warn(utils_1.getLogWithAsn1(sequenceOfTypeCtx, 'Not supported ASN1:'));
                    }
                    if (constraint) {
                        sequenceOfType.setConstraint(constraint);
                    }
                    break;
                }
                default: {
                    logging_1.log.warn(utils_1.getLogWithAsn1(sequenceOfTypeCtx, 'Not supported ASN1:'));
                    break;
                }
            }
        }
        return sequenceOfType;
    }
}
exports.SequenceOfTypeVisitor = SequenceOfTypeVisitor;
