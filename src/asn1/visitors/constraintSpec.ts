import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { SubtypeConstraintVisitor } from './subtypeConstraint';

/**
 * ANTLR4 grammar
 * ```
 * constraintSpec : generalConstraint | subtypeConstraint
 * ```
 */
export class ConstraintSpecVisitor {
  public visitChildren(constraintSpecCtx: any): any /* TODO */ {
    const childCtx = constraintSpecCtx.children[0];
    let constraintSpec = null;
    switch (getContextName(childCtx)) {
      case 'generalConstraint': {
        log.warn(getLogWithAsn1(childCtx, 'GeneralConstraint not supported:'));
        break;
      }
      case 'subtypeConstraint': {
        constraintSpec = childCtx.accept(new SubtypeConstraintVisitor());
        break;
      }
    }
    return constraintSpec;
  }
}
