"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
const logging_1 = require("../../utils/logging");
const utils_1 = require("../utils");
const ASN_3gppParser_1 = require("../ASN_3gppParser");
const objectClassAssignment_1 = require("./objectClassAssignment");
const parameterizedAssignment_1 = require("./parameterizedAssignment");
const typeAssignment_1 = require("./typeAssignment");
const valueAssignment_1 = require("./valueAssignment");
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
class AssignmentListVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    defaultResult() {
        return { assignments: {}, constants: {} };
    }
    visitChildren(assignmentListCtx) {
        const assignmentList = {
            assignments: {},
            constants: {},
        };
        const assignmentCtxes = assignmentListCtx.children;
        assignmentCtxes.forEach((assignmentCtx) => {
            const referenceName = assignmentCtx.children[0].text;
            const rValueContext = assignmentCtx.children[1];
            if (rValueContext instanceof ASN_3gppParser_1.ValueAssignmentContext) {
                const value = rValueContext.accept(new valueAssignment_1.ValueAssignmentVisitor());
                if (value !== null) {
                    assignmentList.constants[referenceName] = value;
                }
            }
            else if (rValueContext instanceof ASN_3gppParser_1.TypeAssignmentContext) {
                const type = rValueContext.accept(new typeAssignment_1.TypeAssignmentVisitor());
                if (type) {
                    assignmentList.assignments[referenceName] = type;
                }
            }
            else if (rValueContext instanceof ASN_3gppParser_1.ParameterizedAssignmentContext) {
                const parameterizedAssignment = rValueContext.accept(new parameterizedAssignment_1.ParameterizedAssignmentVisitor());
                if (parameterizedAssignment) {
                    assignmentList.assignments[referenceName] = parameterizedAssignment;
                }
            }
            else if (rValueContext instanceof ASN_3gppParser_1.ObjectClassAssignmentContext) {
                const objectClassAssignment = rValueContext.accept(new objectClassAssignment_1.ObjectClassAssignmentVisitor());
                if (objectClassAssignment) {
                    assignmentList.assignments[referenceName] = objectClassAssignment;
                }
            }
            else {
                logging_1.log.warn(utils_1.getLogWithAsn1(assignmentCtx, 'Unsupported ASN1 in Assignment:'));
            }
        });
        return assignmentList;
    }
}
exports.AssignmentListVisitor = AssignmentListVisitor;
