"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
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
                // TODO
                logging_1.log.warn(utils_1.getLogWithAsn1(asnTypeCtx, 'BuiltinType not supported:'));
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
            // TODO
            logging_1.log.warn('  Constraint is not supported');
        }
        return type;
    };
    return AsnTypeVisitor;
}());
exports.AsnTypeVisitor = AsnTypeVisitor;
