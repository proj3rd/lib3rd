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
export declare class AssignmentListVisitor {
    visitChildren(assignmentListCtx: any): {
        assignments: any;
        constants: any;
    };
}
