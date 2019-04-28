import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ValueVisitor } from './value';

/**
 * ANTLR4 grammar
 * ```
 * valueAssignment :
 *       asnType
 * 	   ASSIGN_OP
 *        value
 * ```
 */
export class ValueAssignmentVisitor {
  public visitChildren(valueAssignmentCtx: any): any /* TODO */ {
    const valueCtx = valueAssignmentCtx.children[2];
    return valueCtx.accept(new ValueVisitor());
  }
}
