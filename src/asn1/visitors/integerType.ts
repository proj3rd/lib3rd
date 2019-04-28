import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { Integer } from '../classes/integer';

/**
 * ANTLR4 grammar
 * ```
 * integerType:INTEGER_LITERAL  (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
export class IntegerTypeVisitor {
  public visitChildren(integerTypeCtx: any): any /* TODO */ {
    if (integerTypeCtx.children.length > 1) {
      log.warn(getLogWithAsn1(integerTypeCtx, 'NamedNumberList not supported:'));
    }
    return new Integer();
  }
}
