"use strict";
exports.__esModule = true;
var constraint_1 = require("./constraint");
/**
 * ANTLR4 grammar
 * ```
 * sizeConstraint : SIZE_LITERAL constraint
 * ```
 */
var SizeConstraintVisitor = /** @class */ (function () {
    function SizeConstraintVisitor() {
    }
    SizeConstraintVisitor.prototype.visitChildren = function (sizeConstraintCtx) {
        var childCtxes = sizeConstraintCtx.children;
        /** NOTE: It seems ciruclar function call
         * But it is expected to be {min, max} according to below:
         * X.680-201508, 51.5 Size constraint
         *   51.5.2 A "SizeConstraint" can only be applied to bit string types,
         *     octet string types, character string types, set-of types or sequence-of types.
         *   51.5.3 The "Constraint" specifies the permitted integer values for
         *     the length of the specified values, and takes the form of any constraint
         *     which can be applied to the following parent type:
         */
        var constraintCtx = childCtxes[1];
        return constraintCtx.accept(new constraint_1.ConstraintVisitor());
    };
    return SizeConstraintVisitor;
}());
exports.SizeConstraintVisitor = SizeConstraintVisitor;
