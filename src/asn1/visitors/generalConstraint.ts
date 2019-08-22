import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ContentsConstraintContext, GeneralConstraintContext,
        TableConstraintContext, UserDefinedConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ContentsConstraintVisitor, IContentsConstraint } from './contentsConstraint';

/**
 * ANTLR4 grammar
 * ```
 * generalConstraint :  userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
export class GeneralConstraintVisitor extends AbstractParseTreeVisitor<IContentsConstraint>
                                      implements ASN_3gppVisitor<IContentsConstraint> {
  public defaultResult(): IContentsConstraint {
    return undefined;
  }

  public visitChildren(generalConstraintCtx: GeneralConstraintContext): IContentsConstraint {
    const childCtx = generalConstraintCtx.children[0];
    let generalConstraint: IContentsConstraint;
    if (childCtx instanceof UserDefinedConstraintContext) {
      log.warn(getLogWithAsn1(childCtx, 'UserDefinedConstraint not supported:'));
    } else if (childCtx instanceof TableConstraintContext) {
      log.warn(getLogWithAsn1(childCtx, 'TableConstraint not supported:'));
    } else if (childCtx instanceof ContentsConstraintContext) {
      generalConstraint = childCtx.accept(new ContentsConstraintVisitor());
    } else {
      log.warn(getLogWithAsn1(childCtx, 'Not supported ASN1:'));
    }
    return generalConstraint;
  }
}
