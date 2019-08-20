import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { IntegerTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { Integer } from '../classes/integer';

/**
 * ANTLR4 grammar
 * ```
 * integerType:INTEGER_LITERAL  (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
export class IntegerTypeVisitor extends AbstractParseTreeVisitor<Integer> implements ASN_3gppVisitor<Integer> {
  public defaultResult(): Integer {
    return undefined;
  }

  public visitChildren(integerTypeCtx: IntegerTypeContext): Integer {
    if (integerTypeCtx.children.length > 1) {
      log.warn(getLogWithAsn1(integerTypeCtx, 'NamedNumberList not supported:'));
    }
    return new Integer();
  }
}
