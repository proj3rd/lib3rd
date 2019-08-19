"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
/**
 * ANTLR4 grammar
 * ```
 * parameter : (paramGovernor COLON)? IDENTIFIER
 * ```
 */
var ParameterVisitor = /** @class */ (function () {
    function ParameterVisitor() {
    }
    ParameterVisitor.prototype.visitChildren = function (parameterCtx /* TODO */) {
        var childCtxes = parameterCtx.children;
        if (utils_1.getContextName(childCtxes[0]) !== null) {
            logging_1.log.warn(utils_1.getLogWithAsn1(parameterCtx, 'ParamGovernor not supported'));
            return childCtxes[2].getText();
        }
        return childCtxes[0].getText();
    };
    return ParameterVisitor;
}());
exports.ParameterVisitor = ParameterVisitor;
