"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var asnType_1 = require("./asnType");
var value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * actualParameter : asnType | value
 * ```
 */
var ActualParameterVisitor = /** @class */ (function () {
    function ActualParameterVisitor() {
    }
    ActualParameterVisitor.prototype.visitChildren = function (actualParameterCtx) {
        var childCtx = actualParameterCtx.children[0];
        switch (utils_1.getContextName(childCtx)) {
            case 'asnType': {
                return childCtx.accept(new asnType_1.AsnTypeVisitor());
            }
            case 'value': {
                return childCtx.accept(new value_1.ValueVisitor());
            }
            default: {
                logging_1.log.warn(utils_1.getLogWithAsn1(actualParameterCtx, 'Not supported ASN.1'));
                break;
            }
        }
    };
    return ActualParameterVisitor;
}());
exports.ActualParameterVisitor = ActualParameterVisitor;
