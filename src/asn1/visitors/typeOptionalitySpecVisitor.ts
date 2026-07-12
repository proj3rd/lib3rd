/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { Optionality } from '../classes/optionality';
import { TypeOptionalitySpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AsnTypeVisitor } from './asnTypeVisitor';

/**
 * # Grammar
 * ```
 * typeOptionalitySpec: OPTIONAL_LITERAL | (DEFAULT_LITERAL asnType)
 * ```
 */
export class TypeOptionalitySpecVisitor
  extends AbstractParseTreeVisitor<Optionality>
  implements grammar3rdVisitor<Optionality> {
  public visitChildren(ctx: TypeOptionalitySpecContext): Optionality {
    const asnTypeCtx = ctx.asnType();
    if (asnTypeCtx === undefined) {
      return new Optionality();
    }
    const asnType = asnTypeCtx.accept(new AsnTypeVisitor());
    return new Optionality(asnType);
  }

  protected defaultResult(): Optionality {
    return unimpl();
  }
}
