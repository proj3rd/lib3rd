"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var subtypeConstraint_1 = require("./subtypeConstraint");
/**
 * ANTLR4 grammar
 * ```
 * constraintSpec : generalConstraint | subtypeConstraint
 * ```
 */
var ConstraintSpecVisitor = /** @class */ (function () {
    function ConstraintSpecVisitor() {
    }
    ConstraintSpecVisitor.prototype.visitChildren = function (constraintSpecCtx) {
        var childCtx = constraintSpecCtx.children[0];
        var constraintSpec = null;
        switch (utils_1.getContextName(childCtx)) {
            case 'generalConstraint': {
                logging_1.log.warn(utils_1.getLogWithAsn1(childCtx, 'GeneralConstraint not supported:'));
                break;
            }
            case 'subtypeConstraint': {
                constraintSpec = childCtx.accept(new subtypeConstraint_1.SubtypeConstraintVisitor());
                break;
            }
        }
        return constraintSpec;
    };
    return ConstraintSpecVisitor;
}());
exports.ConstraintSpecVisitor = ConstraintSpecVisitor;
