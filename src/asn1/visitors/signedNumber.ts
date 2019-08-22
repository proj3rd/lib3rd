import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { SignedNumberContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

/**
 * ANTLR4 grammar
 * ```
 * signedNumber :  (MINUS)? NUMBER
 * ```
 */
export class SignedNumberVisitor extends AbstractParseTreeVisitor<number>
                                 implements ASN_3gppVisitor<number> {
  public defaultResult(): number {
    return undefined;
  }

  public visitChildren(signedNumberCtx: SignedNumberContext): number {
    return Number(signedNumberCtx.text);
  }
}
