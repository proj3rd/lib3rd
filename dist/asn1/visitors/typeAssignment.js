"use strict";
exports.__esModule = true;
var asnType_1 = require("./asnType");
/**
 * ANTLR4 grammar
 * ```
 * typeAssignment :
 *       ASSIGN_OP
 *       asnType
 * ```
 */
var TypeAssignmentVisitor = /** @class */ (function () {
    function TypeAssignmentVisitor() {
    }
    TypeAssignmentVisitor.prototype.visitChildren = function (typeAssignmentCtx) {
        return typeAssignmentCtx.children[1].accept(new asnType_1.AsnTypeVisitor());
    };
    return TypeAssignmentVisitor;
}());
exports.TypeAssignmentVisitor = TypeAssignmentVisitor;
