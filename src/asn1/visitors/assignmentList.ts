import { getContextName, warnNotSupportedAsn1 } from '../utils';

import { ValueAssignmentVisitor } from './valueAssignment';

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
export class AssignmentListVisitor {
  public visitChildren(assignmentListCtx: any): {assignments: any /* TODO */, constants: any /* TODO */} {
    const assignments = {};
    const constants = {};
    const assignmentCtxes = assignmentListCtx.children;
    assignmentCtxes.forEach((assignmentCtx: any) => {
      const referenceName = assignmentCtx.children[0].getText();
      const rValueContext = assignmentCtx.children[1];
      const contextName = getContextName(rValueContext);
      switch (contextName) {
        case 'valueAssignment': {
          const value = rValueContext.accept(new ValueAssignmentVisitor());
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
          warnNotSupportedAsn1(assignmentCtx);
        }
      }
    });
    return {assignments, constants};
  }
}
