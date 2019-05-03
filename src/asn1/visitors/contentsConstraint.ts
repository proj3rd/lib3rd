import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { AsnTypeVisitor } from './asnType';
import { ValueVisitor } from './value';

/**
 * ANTLR4 grammar
 * ```contentsConstraint :
 *    CONTAINING_LITERAL asnType
 *  |  ENCODED_LITERAL BY_LITERAL value
 *  |  CONTAINING_LITERAL asnType ENCODED_LITERAL BY_LITERAL value
 *  |  WITH_LITERAL COMPONENTS_LITERAL L_BRACE componentPresenceLists R_BRACE
 * ```
 */
export class ContentsConstraintVisitor {
  public visitChildren(contentsConstraintCtx: any): any /* TODO */ {
    const childCtxes = contentsConstraintCtx.children;
    const contentsConstraint: any /* TODO */ = {};
    switch (childCtxes[0].getText().toLowerCase()) {
      case 'containing': {
        const asnTypeCtx = childCtxes[1];
        const asnType = asnTypeCtx.accept(new AsnTypeVisitor());
        contentsConstraint.containing = asnType;
        const valueCtx = childCtxes[4];
        if (valueCtx) {
          const value = valueCtx.accept(new ValueVisitor());
          contentsConstraint.encodedBy = value;
        }
        break;
      }
      case 'encoded': {
        log.warn(getLogWithAsn1(contentsConstraintCtx, 'Encoded not supported:'));
        break;
      }
      case 'with': {
        log.warn(getLogWithAsn1(contentsConstraintCtx, 'With not supported:'));
        break;
      }
      default: {
        log.warn(getLogWithAsn1(contentsConstraintCtx, 'Not supported ASN1:'));
        break;
      }
    }
    return contentsConstraint;
  }
}
