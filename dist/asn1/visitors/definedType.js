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
        var definedType = new definedType_1.DefinedType();
        var childCtxes = definedTypeCtx.children;
        childCtxes.forEach(function (childCtx) {
            switch (utils_1.getContextName(childCtx)) {
                case 'actualParameterList': {
                    logging_1.log.warn(utils_1.getLogWithAsn1(definedTypeCtx, 'actualParameterList not supported'));
                    break;
                }
                case null: {
                    var text = childCtx.getText();
                    if (text !== '.') {
                        if (!definedType.typeReference) {
                            definedType.typeReference = text;
                        }
                        else {
                            definedType.moduleReference = definedType.typeReference;
                            definedType.typeReference = text;
                        }
                    }
                    break;
                }
                default: {
                    logging_1.log.warn(utils_1.getLogWithAsn1(definedTypeCtx, 'Not supported ASN.1'));
                    break;
                }
            }
        });
        return definedType;
    };
    return DefinedTypeVisitor;
}());
exports.DefinedTypeVisitor = DefinedTypeVisitor;
