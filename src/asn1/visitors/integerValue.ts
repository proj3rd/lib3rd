import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { IntegerValueContext, SignedNumberContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { SignedNumberVisitor } from './signedNumber';

export type AsnIntegerValue = number | string;

/**
 * ANTLR4 grammar
 * ```
 * integerValue :  signedNumber | IDENTIFIER
 * ```
 */
export class IntegerValueVisitor extends AbstractParseTreeVisitor<AsnIntegerValue>
                                 implements ASN_3gppVisitor<AsnIntegerValue> {
  public defaultResult(): AsnIntegerValue {
    return undefined;
  }

  public visitChildren(integerValueCtx: IntegerValueContext): number | string {
    const childCtx = integerValueCtx.children[0];
    let integerValue: AsnIntegerValue;
    if (childCtx instanceof SignedNumberContext) {
      integerValue = integerValueCtx.accept(new SignedNumberVisitor());
    } else {
      integerValue = integerValueCtx.text;
    }
    return integerValue;
  }
}
