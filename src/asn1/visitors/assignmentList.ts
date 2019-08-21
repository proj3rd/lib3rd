import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { AssignmentContext, AssignmentListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { BuiltinValue } from './builtinValue';
import { ParameterizedAssignmentVisitor } from './parameterizedAssignment';
import { TypeAssignmentVisitor } from './typeAssignment';
import { ValueAssignmentVisitor } from './valueAssignment';

export interface IAssignments {
  [referenceName: string]: AsnType;
}

export interface IConstants {
  [referenceName: string]: BuiltinValue;
}

interface IAssignmentList {
  assignments: IAssignments;
  constants: IConstants;
}

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
export class AssignmentListVisitor extends AbstractParseTreeVisitor<IAssignmentList>
                                   implements ASN_3gppVisitor<IAssignmentList> {
  public defaultResult(): IAssignmentList {
    return { assignments: {}, constants: {} };
  }

  public visitChildren(assignmentListCtx: AssignmentListContext): IAssignmentList {
    const assignmentList: IAssignmentList = {
      assignments: {},
      constants: {},
    };
    const assignmentCtxes = assignmentListCtx.children;
    assignmentCtxes.forEach((assignmentCtx: AssignmentContext) => {
      const referenceName = assignmentCtx.children[0].text;
      const rValueContext = assignmentCtx.children[1];
      const contextName = getContextName(rValueContext);
      switch (contextName) {
        case 'valueAssignment': {
          const value = rValueContext.accept(new ValueAssignmentVisitor());
          if (value !== null) {
            assignmentList.constants[referenceName] = value;
          }
          break;
        }
        case 'typeAssignment': {
          const type = rValueContext.accept(new TypeAssignmentVisitor());
          if (type) {
            assignmentList.assignments[referenceName] = type;
          }
          break;
        }
        case 'parameterizedAssignment': {
          const parameterizedAssignment = rValueContext.accept(new ParameterizedAssignmentVisitor());
          if (parameterizedAssignment) {
            assignmentList.assignments[referenceName] = parameterizedAssignment;
          }
          break;
        }
        case 'objectClassAssignment': {
          log.warn(getLogWithAsn1(assignmentCtx, 'ObjectClassAssignment not supported:'));
          // TODO?
          break;
        }
        default: {
          log.warn(getLogWithAsn1(assignmentCtx, 'Unsupported ASN1 in Assignment:'));
        }
      }
    });
    return assignmentList;
  }
}
