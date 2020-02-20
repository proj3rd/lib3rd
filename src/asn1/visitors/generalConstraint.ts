import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ContentsConstraintContext, GeneralConstraintContext,
        TableConstraintContext, UserDefinedConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ContainingEncodedByConstraint } from '../classes/containingEncodedByConstraint';
import { TableConstraint } from '../classes/tableConstraint';
import { ContentsConstraintVisitor, IContentsConstraint } from './contentsConstraint';
import { TableConstraintVisitor } from './tableConstraint';

export type GeneralConstraint = TableConstraint | IContentsConstraint | ContainingEncodedByConstraint;

/**
 * ANTLR4 grammar
 * ```
 * generalConstraint :  userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
export class GeneralConstraintVisitor extends AbstractParseTreeVisitor<GeneralConstraint>
                                      implements ASN_3gppVisitor<GeneralConstraint> {
  public defaultResult(): GeneralConstraint {
    return undefined;
  }

  public visitChildren(generalConstraintCtx: GeneralConstraintContext): GeneralConstraint {
    const childCtx = generalConstraintCtx.children[0];
    let generalConstraint: GeneralConstraint;
    if (childCtx instanceof UserDefinedConstraintContext) {
      log.warn(getLogWithAsn1(childCtx, 'UserDefinedConstraint not supported:'));
    } else if (childCtx instanceof TableConstraintContext) {
      generalConstraint = childCtx.accept(new TableConstraintVisitor());
    } else if (childCtx instanceof ContentsConstraintContext) {
      generalConstraint = childCtx.accept(new ContentsConstraintVisitor());
    } else {
      log.warn(getLogWithAsn1(childCtx, 'Not supported ASN1:'));
    }
    return generalConstraint;
  }
}
