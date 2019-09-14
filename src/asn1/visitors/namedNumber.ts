import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { DefinedValueContext, NamedNumberContext, SignedNumberContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { SignedNumberVisitor } from './signedNumber';

export interface INamedNumber {
  name: string;
  num: number;
}

/**
 * ANTLR4 grammar
 * ```
 * namedNumber :   IDENTIFIER L_PARAN (signedNumber | definedValue) R_PARAN
 * ```
 */
export class NamedNumberVisitor extends AbstractParseTreeVisitor<INamedNumber>
                                  implements ASN_3gppVisitor<INamedNumber> {
  public defaultResult(): INamedNumber {
    return undefined;
  }

  public visitChildren(namedNumberCtx: NamedNumberContext): INamedNumber {
    const { children } = namedNumberCtx;
    const name = children[0].text;
    let num: number;
    const numberCtx = children[2];
    if (numberCtx instanceof SignedNumberContext) {
      num = numberCtx.accept(new SignedNumberVisitor());
    } else if (numberCtx instanceof DefinedValueContext) {
      log.warn(new Error('DefinedValue not supported'));
    } else {
      log.warn(new Error(getLogWithAsn1(namedNumberCtx, 'Unexpected ASN.1')));
    }
    return { name, num };
  }
}
