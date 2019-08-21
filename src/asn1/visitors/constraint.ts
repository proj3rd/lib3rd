import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ConstraintSpec, ConstraintSpecVisitor } from './constraintSpec';

/**
 * ANTLR4 grammar
 * ```
 * constraint :L_PARAN constraintSpec  exceptionSpec? R_PARAN
 * ```
 */
export class ConstraintVisitor extends AbstractParseTreeVisitor<ConstraintSpec>
                               implements ASN_3gppVisitor<ConstraintSpec> {
  public defaultResult(): ConstraintSpec {
    return undefined;
  }

  public visitChildren(constraintCtx: ConstraintContext): ConstraintSpec {
    const childCtxes = constraintCtx.children;
    const constraintSpecCtx = childCtxes[1];
    const constraint = constraintSpecCtx.accept(new ConstraintSpecVisitor());
    if (getContextName(childCtxes[2]) === 'exceptionSpec') {
      log.warn(getLogWithAsn1(constraintCtx, 'ExceptionSpec not supported:'));
    }
    return constraint;
  }
}
