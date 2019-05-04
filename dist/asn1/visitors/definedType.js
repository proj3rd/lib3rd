"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var definedType_1 = require("../classes/definedType");
/**
 * ANTLR4 grammar
 * ```
 * definedType :
 * IDENTIFIER (DOT IDENTIFIER)? actualParameterList?
 * ```
 */
var DefinedTypeVisitor = /** @class */ (function () {
    function DefinedTypeVisitor() {
    }
    DefinedTypeVisitor.prototype.visitChildren = function (definedTypeCtx) {
        var childCtxes = definedTypeCtx.children;
        var definedType = new definedType_1.DefinedType();
        switch (childCtxes.length) {
            case 1: {
                // ITENDIFIER
                definedType.typeReference = childCtxes[0].getText();
            }
            case 2: {
                // ITENDIFIER actualParameterList?
                if (childCtxes.length === 2) {
                    // TODO
                    logging_1.log.warn(utils_1.getLogWithAsn1(definedTypeCtx, 'Parameterized[ValueSet]Type not supported:'));
                }
                break;
            }
            case 3: {
                // IDENTIFIER DOT IDENTIFIER
                definedType.moduleReference = childCtxes[0].getText();
                definedType.typeReference = childCtxes[2].getText();
            }
            case 4: {
                // IDENTIFIER DOT IDENTIFIER actualParameterList?
                if (childCtxes.length === 4) {
                    // TODO
                    logging_1.log.warn(utils_1.getLogWithAsn1(definedTypeCtx, 'ExternalTypeReference with params not supported:'));
                }
                break;
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(definedTypeCtx, 'Not supported ASN1:'));
                return null;
                break;
            }
        }
        // TODO
        return definedType;
    };
    return DefinedTypeVisitor;
}());
exports.DefinedTypeVisitor = DefinedTypeVisitor;
