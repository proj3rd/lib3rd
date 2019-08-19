"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var builtinType_1 = require("./builtinType");
var constraint_1 = require("./constraint");
var referencedType_1 = require("./referencedType");
/**
 * ANTLR4 grammar
 * ```
 * asnType : (builtinType | referencedType) (constraint)*
 * ```
 */
var AsnTypeVisitor = /** @class */ (function () {
    function AsnTypeVisitor() {
    }
    AsnTypeVisitor.prototype.visitChildren = function (asnTypeCtx) {
        var childCtxes = asnTypeCtx.children;
        var typeCtx = childCtxes[0];
        var constraintCtx = childCtxes[1];
        var contextName = utils_1.getContextName(typeCtx);
        var type = null;
        switch (contextName) {
            case 'builtinType': {
                type = typeCtx.accept(new builtinType_1.BuiltinTypeVisitor());
                break;
            }
            case 'referencedType': {
                type = typeCtx.accept(new referencedType_1.ReferencedTypeVisitor());
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(asnTypeCtx, 'Not supported ASN1 in Type:'));
            }
        }
        if (constraintCtx) {
            var constraint = constraintCtx.accept(new constraint_1.ConstraintVisitor());
            if (constraint && type && type.setConstraint) {
                type.setConstraint(constraint);
            }
        }
        return type;
    };
    return AsnTypeVisitor;
}());
exports.AsnTypeVisitor = AsnTypeVisitor;
