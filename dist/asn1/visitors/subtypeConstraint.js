"use strict";
exports.__esModule = true;
var elementSetSpecs_1 = require("./elementSetSpecs");
/**
 * ANTLR4 grammar
 * ```
 * subtypeConstraint	:
 * elementSetSpecs
 * ```
 */
var SubtypeConstraintVisitor = /** @class */ (function () {
    function SubtypeConstraintVisitor() {
    }
    SubtypeConstraintVisitor.prototype.visitChildren = function (subtypeConstraintCtx) {
        var elementSetSpecs = subtypeConstraintCtx.children[0];
        return elementSetSpecs.accept(new elementSetSpecs_1.ElementSetSpecsVisitor());
    };
    return SubtypeConstraintVisitor;
}());
exports.SubtypeConstraintVisitor = SubtypeConstraintVisitor;
