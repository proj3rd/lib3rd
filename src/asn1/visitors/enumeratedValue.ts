import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { EnumeratedValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

/**
 * ANTLR4 grammar
 * ```
 * enumeratedValue  : IDENTIFIER
 * ```
 */
export class EnumeratedValueVisitor extends AbstractParseTreeVisitor<string> implements ASN_3gppVisitor<string> {
  public defaultResult(): string {
    return '';
  }

  public visitChildren(enumeratedValueCtx: EnumeratedValueContext): string {
    return enumeratedValueCtx.text;
  }
}
