"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
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
        const constraints = [];
        childCtxes.forEach((childCtx) => {
            if (childCtx instanceof ASN_3gppParser_1.ConstraintContext) {
                constraints.push(childCtx.accept(new constraint_1.ConstraintVisitor()));
            }
            if (childCtx instanceof ASN_3gppParser_1.SizeConstraintContext) {
                constraints.push(childCtx.accept(new sizeConstraint_1.SizeConstraintVisitor()));
            }
            if (childCtx instanceof ASN_3gppParser_1.AsnTypeContext) {
                sequenceOfType = new sequenceOf_1.SequenceOf(childCtx.accept(new asnType_1.AsnTypeVisitor()));
            }
            if (childCtx instanceof ASN_3gppParser_1.NamedTypeContext) {
                sequenceOfType = new sequenceOf_1.SequenceOf(childCtx.accept(new namedType_1.NamedTypeVisitor()));
            }
        });
        if (sequenceOfType) {
            sequenceOfType.setConstraint(constraints);
        }
        return sequenceOfType;
    }
}
exports.SequenceOfTypeVisitor = SequenceOfTypeVisitor;
