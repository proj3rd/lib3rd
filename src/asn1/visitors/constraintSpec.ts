import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { GeneralConstraintVisitor } from './generalConstraint';
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
        constraintSpec = childCtx.accept(new GeneralConstraintVisitor());
        break;
      }
      case 'subtypeConstraint': {
        constraintSpec = childCtx.accept(new SubtypeConstraintVisitor());
        break;
      }
      default: {
        log.warn(getLogWithAsn1(constraintSpecCtx, 'Not supported ASN1:'));
        break;
      }
    }
    return constraintSpec;
  }
}
