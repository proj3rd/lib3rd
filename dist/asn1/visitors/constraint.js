"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var constraintSpec_1 = require("./constraintSpec");
/**
 * ANTLR4 grammar
 * ```
 * constraint :L_PARAN constraintSpec  exceptionSpec? R_PARAN
 * ```
 */
var ConstraintVisitor = /** @class */ (function () {
    function ConstraintVisitor() {
    }
    ConstraintVisitor.prototype.visitChildren = function (constraintCtx) {
        var childCtxes = constraintCtx.children;
        var constraintSpecCtx = childCtxes[1];
        var constraint = constraintSpecCtx.accept(new constraintSpec_1.ConstraintSpecVisitor());
        if (utils_1.getContextName(childCtxes[2]) === 'exceptionSpec') {
            logging_1.log.warn(utils_1.getLogWithAsn1(constraintCtx, 'ExceptionSpec not supported:'));
        }
        return constraint;
    };
    return ConstraintVisitor;
}());
exports.ConstraintVisitor = ConstraintVisitor;
