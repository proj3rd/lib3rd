import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { ContentsConstraintVisitor } from './contentsConstraint';

/**
 * ANTLR4 grammar
 * ```
 * generalConstraint :  userDefinedConstraint | tableConstraint | contentsConstraint
 * ```
 */
export class GeneralConstraintVisitor {
  public visitChildren(generalConstraintCtx: any): any /* TODO */ {
    const childCtx = generalConstraintCtx.children[0];
    let generalConstraint = null;
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
