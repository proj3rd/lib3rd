import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

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
          log.warn(getLogWithAsn1(assignmentCtx, 'TypeAssignment not supported:'));
          // TODO
          break;
        }
        case 'parameterizedAssignment': {
          log.warn(getLogWithAsn1(assignmentCtx, 'ParameterizedAssignment not supported:'));
          // TODO
          break;
        }
        case 'objectClassAssignment': {
          log.warn(getLogWithAsn1(assignmentCtx, 'ObjectClassAssignment not supported'));
          // TODO?
          break;
        }
        default: {
          log.warn(getLogWithAsn1(assignmentCtx, 'Unsupported ASN1 in Assignment:'));
        }
      }
    });
    return {assignments, constants};
  }
}
