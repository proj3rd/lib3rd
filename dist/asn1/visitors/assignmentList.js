"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
var logging_1 = require("../../utils/logging");
var utils_1 = require("../utils");
var parameterizedAssignment_1 = require("./parameterizedAssignment");
var typeAssignment_1 = require("./typeAssignment");
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
var AssignmentListVisitor = /** @class */ (function (_super) {
    __extends(AssignmentListVisitor, _super);
    function AssignmentListVisitor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AssignmentListVisitor.prototype.defaultResult = function () {
        return { assignments: {}, constants: {} };
    };
    AssignmentListVisitor.prototype.visitChildren = function (assignmentListCtx) {
        var assignmentList = {
            assignments: {},
            constants: {},
        };
        var assignmentCtxes = assignmentListCtx.children;
        assignmentCtxes.forEach(function (assignmentCtx) {
            var referenceName = assignmentCtx.children[0].text;
            var rValueContext = assignmentCtx.children[1];
            var contextName = utils_1.getContextName(rValueContext);
            switch (contextName) {
                case 'valueAssignment': {
                    var value = rValueContext.accept(new valueAssignment_1.ValueAssignmentVisitor());
                    if (value !== null) {
                        assignmentList.constants[referenceName] = value;
                    }
                    break;
                }
                case 'typeAssignment': {
                    var type = rValueContext.accept(new typeAssignment_1.TypeAssignmentVisitor());
                    if (type) {
                        assignmentList.assignments[referenceName] = type;
                    }
                    break;
                }
                case 'parameterizedAssignment': {
                    var parameterizedAssignment = rValueContext.accept(new parameterizedAssignment_1.ParameterizedAssignmentVisitor());
                    if (parameterizedAssignment) {
                        assignmentList.assignments[referenceName] = parameterizedAssignment;
                    }
                    break;
                }
                case 'objectClassAssignment': {
                    logging_1.log.warn(utils_1.getLogWithAsn1(assignmentCtx, 'ObjectClassAssignment not supported:'));
                    // TODO?
                    break;
                }
                default: {
                    logging_1.log.warn(utils_1.getLogWithAsn1(assignmentCtx, 'Unsupported ASN1 in Assignment:'));
                }
            }
        });
        return assignmentList;
    };
    return AssignmentListVisitor;
}(AbstractParseTreeVisitor_1.AbstractParseTreeVisitor));
exports.AssignmentListVisitor = AssignmentListVisitor;
