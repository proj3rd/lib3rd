"use strict";
exports.__esModule = true;
var logging_1 = require("../../utils/logging");
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
                    logging_1.log.warn('ASN.1 Assignment contains TypeAssignment defined in X.680.' +
                        'This will not be treated in the current version');
                    // TODO
                    // break;
                }
                case 'parameterizedAssignment': {
                    logging_1.log.warn('ASN.1 Assignment contains ParameterizedAssignment defined in X.680.' +
                        'This will not be treated in the current version');
                    // TODO
                    // break;
                }
                case 'objectClassAssignment': {
                    logging_1.log.warn('ASN.1 Assignment contains ObjectClassAssignment defined in X.680.' +
                        'This will not be treated in the current version');
                    // TODO?
                    // break;
                }
                default: {
                    logging_1.log.warn('ASN.1 Assignment contains not supported context. This will not be treated in the current version');
                }
            }
        });
        return { assignments: assignments, constants: constants };
    };
    return AssignmentListVisitor;
}());
exports.AssignmentListVisitor = AssignmentListVisitor;
