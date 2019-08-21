"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
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
var SequenceOfTypeVisitor = /** @class */ (function (_super) {
    __extends(SequenceOfTypeVisitor, _super);
    function SequenceOfTypeVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SequenceOfTypeVisitor.prototype.defaultResult = function () {
        return undefined;
    };
    SequenceOfTypeVisitor.prototype.visitChildren = function (sequenceOfTypeCtx) {
        var childCtxes = sequenceOfTypeCtx.children;
        var sequenceOfType;
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
                    var constraint = void 0;
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
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.SequenceOfTypeVisitor = SequenceOfTypeVisitor;
