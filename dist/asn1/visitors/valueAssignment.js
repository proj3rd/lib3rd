"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var value_1 = require("./value");
/**
 * ANTLR4 grammar
 * ```
 * valueAssignment :
 *       asnType
 * 	   ASSIGN_OP
 *        value
 * ```
 */
var ValueAssignmentVisitor = /** @class */ (function () {
    function ValueAssignmentVisitor() {
    }
    ValueAssignmentVisitor.prototype.visitChildren = function (valueAssignmentCtx) {
        var valueCtx = valueAssignmentCtx.children[2];
        return valueCtx.accept(new value_1.ValueVisitor());
    };
    return ValueAssignmentVisitor;
}());
exports.ValueAssignmentVisitor = ValueAssignmentVisitor;
