import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

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
    log.warn(getLogWithAsn1(contentsConstraintCtx, 'ContentsConstraint not supported:'));
  }
}
