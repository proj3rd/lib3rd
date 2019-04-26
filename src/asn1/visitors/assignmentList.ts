import { log } from '../../utils/logging';
import { getContextName } from '../utils';

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
          log.warn('ASN.1 Assignment contains TypeAssignment defined in X.680.' +
            'This will not be treated in the current version');
          // TODO
          // break;
        }
        case 'parameterizedAssignment': {
          log.warn('ASN.1 Assignment contains ParameterizedAssignment defined in X.680.' +
            'This will not be treated in the current version');
          // TODO
          // break;
        }
        case 'objectClassAssignment': {
          log.warn('ASN.1 Assignment contains ObjectClassAssignment defined in X.680.' +
            'This will not be treated in the current version');
          // TODO?
          // break;
        }
        default: {
          log.warn('ASN.1 Assignment contains not supported context. This will not be treated in the current version');
        }
      }
    });
    return {assignments, constants};
  }
}
