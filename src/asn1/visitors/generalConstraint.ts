import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { GeneralConstraintContext } from '../ASN_3gppParser';
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
    switch (getContextName(childCtx)) {
      case 'userDefinedConstraint': {
        log.warn(getLogWithAsn1(childCtx, 'UserDefinedConstraint not supported:'));
        break;
      }
      case 'tableConstraint': {
        log.warn(getLogWithAsn1(childCtx, 'TableConstraint not supported:'));
        break;
      }
      case 'contentsConstraint': {
        generalConstraint = childCtx.accept(new ContentsConstraintVisitor());
        break;
      }
      default: {
        log.warn(getLogWithAsn1(childCtx, 'Not supported ASN1:'));
        break;
      }
    }
    return generalConstraint;
  }
}
