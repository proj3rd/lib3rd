import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { BitStringTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { BitString } from '../classes/bitString';

/**
 * ANTLR4 grammar
 * ```
 * (BIT_LITERAL STRING_LITERAL) (L_BRACE namedBitList R_BRACE)?
 * ```
 */
export class BitStringTypeVisitor extends AbstractParseTreeVisitor<BitString> implements ASN_3gppVisitor<BitString> {
  public defaultResult(): BitString {
    return undefined;
  }

  public visitChildren(bitStringTypeCtx: BitStringTypeContext): BitString {
    const childCtxes = bitStringTypeCtx.children;
    const bitStringType = new  BitString();
    if (childCtxes[3]) {
      log.warn(getLogWithAsn1(bitStringTypeCtx, 'NamedBitList not supported:'));
    }
    return bitStringType;
  }
}
