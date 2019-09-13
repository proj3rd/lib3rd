import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ConstraintSpecContext, GeneralConstraintContext, SubtypeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IConstraint } from './elements';
import { GeneralConstraint, GeneralConstraintVisitor } from './generalConstraint';
import { SubtypeConstraintVisitor } from './subtypeConstraint';

export type ConstraintSpec = GeneralConstraint | IConstraint;

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
    if (childCtx instanceof GeneralConstraintContext) {
      constraintSpec = childCtx.accept(new GeneralConstraintVisitor());
    } else if (childCtx instanceof SubtypeConstraintContext) {
      constraintSpec = childCtx.accept(new SubtypeConstraintVisitor());
    } else {
      log.warn(getLogWithAsn1(constraintSpecCtx, 'Not supported ASN1:'));
    }
    return constraintSpec;
  }
}
