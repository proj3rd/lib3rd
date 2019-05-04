"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var sequenceOf_1 = require("../classes/sequenceOf");
var asnType_1 = require("./asnType");
var constraint_1 = require("./constraint");
var namedType_1 = require("./namedType");
var sizeConstraint_1 = require("./sizeConstraint");
/**
 * ANTLR4 grammar
 * ```
 * sequenceOfType  : SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)? OF_LITERAL (asnType | namedType )
 * ```
 */
var SequenceOfTypeVisitor = /** @class */ (function () {
    function SequenceOfTypeVisitor() {
    }
    SequenceOfTypeVisitor.prototype.visitChildren = function (sequenceOfTypeCtx) {
        var childCtxes = sequenceOfTypeCtx.children;
        var sequenceOfType = null;
        var typeCtx = childCtxes[childCtxes.length - 1];
        var type = null;
        switch (utils_1.getContextName(typeCtx)) {
            case 'asnType': {
                type = typeCtx.accept(new asnType_1.AsnTypeVisitor());
                break;
            }
            case 'namedType': {
                type = typeCtx.accept(new namedType_1.NamedTypeVisitor());
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(sequenceOfTypeCtx, 'Not supported ASN1:'));
                break;
            }
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
                    var constraintCtx = childCtxes[2];
                    var constraint = null;
                    switch (utils_1.getContextName(constraintCtx)) {
                        case 'constraint': {
                            constraint = constraintCtx.accept(new constraint_1.ConstraintVisitor());
                            break;
                        }
                        case 'sizeConstraint': {
                            constraint = constraintCtx.accept(new sizeConstraint_1.SizeConstraintVisitor());
                            break;
                        }
                        default: {
                            logging_1.log.warn(utils_1.getLogWithAsn1(sequenceOfTypeCtx, 'Not supported ASN1:'));
                            break;
                        }
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
    };
    return SequenceOfTypeVisitor;
}());
exports.SequenceOfTypeVisitor = SequenceOfTypeVisitor;
