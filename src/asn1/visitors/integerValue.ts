import { getContextName } from '../utils';

import { SignedNumberVisitor } from './signedNumber';

/**
 * ANTLR4 grammar
 * ```
 * integerValue :  signedNumber | IDENTIFIER
 * ```
 */
export class IntegerValueVisitor {
  public visitChildren(integerValueCtx: any): number | string {
    const childCtx = integerValueCtx.children[0];
    let integerValue: number | string = null;
    switch (getContextName(childCtx)) {
      case 'signedNumber': {
        integerValue = integerValueCtx.accept(new SignedNumberVisitor());
        break;
      }
      default: {
        integerValue = integerValueCtx.getText();
        break;
      }
    }
    return integerValue;
  }
}
