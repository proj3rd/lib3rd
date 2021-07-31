/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import {
  DefinedValueContext,
  NamedNumberContext,
  SignedNumberContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { INamedNumber } from '../types/namedNumber';
import { SignedNumberVisitor } from './signedNumberVisitor';

/**
 * # Grammar
 * ```
 * namedNumber: IDENTIFIER L_PARAN (signedNumber | definedValue) R_PARAN
 * ```
 */
export class NamedNumberVisitor extends AbstractParseTreeVisitor<INamedNumber>
  implements grammar3rdVisitor<INamedNumber> {
  public visitChildren(ctx: NamedNumberContext): INamedNumber {
    const name = ctx.getChild(0).text;
    const thirdCtx = ctx.getChild(2);
    if (thirdCtx instanceof SignedNumberContext) {
      const valueLiteral = thirdCtx.accept(new SignedNumberVisitor());
      return { name, valueLiteral };
    } if (thirdCtx instanceof DefinedValueContext) {
      return todo();
    }
    throw Error();
  }

  protected defaultResult(): INamedNumber {
    return unimpl();
  }
}
