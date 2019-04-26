"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
var valueAssignment_1 = require("./valueAssignment");
/**
 * ANTLR4 grammar
 * ```
 * assignmentList :  (assignment) (assignment)*
 * assignment :
 * (IDENTIFIER
 *  (  valueAssignment
 *  | typeAssignment
 *  | parameterizedAssignment
 *  | objectClassAssignment
 *  )
 * )
 * ```
 */
var AssignmentListVisitor = /** @class */ (function () {
    function AssignmentListVisitor() {
    }
    AssignmentListVisitor.prototype.visitChildren = function (assignmentListCtx) {
        var assignments = {};
        var constants = {};
        var assignmentCtxes = assignmentListCtx.children;
        assignmentCtxes.forEach(function (assignmentCtx) {
            var referenceName = assignmentCtx.children[0].getText();
            var rValueContext = assignmentCtx.children[1];
            var contextName = utils_1.getContextName(rValueContext);
            switch (contextName) {
                case 'valueAssignment': {
                    var value = rValueContext.accept(new valueAssignment_1.ValueAssignmentVisitor());
                    if (value !== null) {
                        constants[referenceName] = value;
                    }
                    break;
                }
                case 'typeAssignment': {
                    // TODO
                    // break;
                }
                case 'parameterizedAssignment': {
                    // TODO
                    // break;
                }
                case 'objectClassAssignment': {
                    // TODO?
                    // break;
                }
                default: {
                    utils_1.warnNotSupportedAsn1(assignmentCtx);
                }
            }
        });
        return { assignments: assignments, constants: constants };
    };
    return AssignmentListVisitor;
}());
exports.AssignmentListVisitor = AssignmentListVisitor;
