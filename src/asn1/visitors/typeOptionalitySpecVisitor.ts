import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Optionality } from '../classes/optionality';
import { TypeOptionalitySpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AsnTypeVisitor } from './asnTypeVisitor';

/**
 * # Grammar
 * ```
 * typeOptionalitySpec: OPTIONAL_LITERAL | (DEFAULT_LITERAL asnType)
 * ```
 */
export class TypeOptionalitySpecVisitor
  extends AbstractParseTreeVisitor<Optionality>
  implements ASN_3gppVisitor<Optionality> {
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
