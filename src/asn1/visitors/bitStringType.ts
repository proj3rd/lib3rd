import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { BitString } from '../classes/bitString';

/**
 * ANTLR4 grammar
 * ```
 * (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
export class BitStringTypeVisitor {
  public visitChildren(bitStringTypeCtx: any): any /* TODO */ {
    const childCtxes = bitStringTypeCtx.children;
    const bitStringType = new  BitString();
    if (childCtxes[3]) {
      log.warn(getLogWithAsn1(bitStringTypeCtx, 'NamedBitList not supported:'));
    }
    return bitStringType;
  }
}
