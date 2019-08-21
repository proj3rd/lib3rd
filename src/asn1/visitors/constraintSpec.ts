import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ConstraintSpecContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IContentsConstraint } from './contentsConstraint';
import { IConstraint } from './elements';
import { GeneralConstraintVisitor } from './generalConstraint';
import { SubtypeConstraintVisitor } from './subtypeConstraint';

export type ConstraintSpec = IContentsConstraint | IConstraint;

/**
 * ANTLR4 grammar
 * ```
 * constraintSpec : generalConstraint | subtypeConstraint
 * ```
 */
export class ConstraintSpecVisitor extends AbstractParseTreeVisitor<ConstraintSpec>
                                   implements ASN_3gppVisitor<ConstraintSpec> {
  public defaultResult(): ConstraintSpec {
    return undefined;
  }

  public visitChildren(constraintSpecCtx: ConstraintSpecContext): ConstraintSpec {
    const childCtx = constraintSpecCtx.children[0];
    let constraintSpec: ConstraintSpec;
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
