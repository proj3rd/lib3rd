import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { AssignmentContext, AssignmentListContext, ObjectClassAssignmentContext,
         ParameterizedAssignmentContext, TypeAssignmentContext, ValueAssignmentContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { BuiltinValue } from './builtinValue';
import { ObjectClassAssignmentVisitor } from './objectClassAssignment';
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
      if (rValueContext instanceof ValueAssignmentContext) {
        const value = rValueContext.accept(new ValueAssignmentVisitor());
        if (value !== null) {
          assignmentList.constants[referenceName] = value;
        }
      } else if (rValueContext instanceof TypeAssignmentContext) {
        const type = rValueContext.accept(new TypeAssignmentVisitor());
        if (type) {
          assignmentList.assignments[referenceName] = type;
        }
      } else if (rValueContext instanceof ParameterizedAssignmentContext) {
        const parameterizedAssignment = rValueContext.accept(new ParameterizedAssignmentVisitor());
        if (parameterizedAssignment) {
          assignmentList.assignments[referenceName] = parameterizedAssignment;
        }
      } else if (rValueContext instanceof ObjectClassAssignmentContext) {
        const objectClassAssignment = rValueContext.accept (new ObjectClassAssignmentVisitor());
        if (objectClassAssignment) {
          assignmentList.assignments[referenceName] = objectClassAssignment;
        }
      } else {
        log.warn(getLogWithAsn1(assignmentCtx, 'Unsupported ASN1 in Assignment:'));
      }
    });
    return assignmentList;
  }
}
