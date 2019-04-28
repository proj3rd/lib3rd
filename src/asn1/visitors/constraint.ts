import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ConstraintSpecVisitor } from './constraintSpec';

/**
 * ANTLR4 grammar
 * ```
 * constraint :L_PARAN constraintSpec  exceptionSpec? R_PARAN
 * ```
 */
export class ConstraintVisitor {
  public visitChildren(constraintCtx: any): any /* TODO */ {
    const childCtxes = constraintCtx.children;
    const constraintSpecCtx = childCtxes[1];
    const constraint = constraintSpecCtx.accept(new ConstraintSpecVisitor());
    if (getContextName(childCtxes[2]) === 'exceptionSpec') {
      log.warn(getLogWithAsn1(constraintCtx, 'ExceptionSpec not supported:'));
    }
    return constraint;
  }
}
