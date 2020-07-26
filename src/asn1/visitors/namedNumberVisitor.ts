import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import {
  DefinedValueContext,
  NamedNumberContext,
  SignedNumberContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { INamedNumber } from '../types';
import { SignedNumberVisitor } from './signedNumberVisitor';

/**
 * # Grammar
 * ```
 * namedNumber: IDENTIFIER L_PARAN (signedNumber | definedValue) R_PARAN
 * ```
 */
export class NamedNumberVisitor extends AbstractParseTreeVisitor<INamedNumber>
  implements ASN_3gppVisitor<INamedNumber> {
  public visitChildren(ctx: NamedNumberContext): INamedNumber {
    const name = ctx.getChild(0).text;
    const thirdCtx = ctx.getChild(2);
    if (thirdCtx instanceof SignedNumberContext) {
      const valueLiteral = thirdCtx.accept(new SignedNumberVisitor());
      return { name, valueLiteral };
    } else if (thirdCtx instanceof DefinedValueContext) {
      return todo();
    } else {
      throw Error();
    }
  }

  protected defaultResult(): INamedNumber {
    return unimpl();
  }
}
