"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var parameter_1 = require("./parameter");
/**
 * ANTLR4 grammar
 * ```
 * parameterList : L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
var ParameterListVisitor = /** @class */ (function () {
    function ParameterListVisitor() {
    }
    ParameterListVisitor.prototype.visitChildren = function (parameterListCtx /* TODO */) {
        var parameterList = [];
        var childCtxes = parameterListCtx.children;
        childCtxes.forEach(function (childCtx) {
            if (utils_1.getContextName(childCtx) !== 'parameter') {
                return;
            }
            parameterList.push(childCtx.accept(new parameter_1.ParameterVisitor()));
        });
        return parameterList;
    };
    return ParameterListVisitor;
}());
exports.ParameterListVisitor = ParameterListVisitor;
