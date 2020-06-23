import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumeratedType } from '../classes/enumeratedType';
import { EnumeratedTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { EnumerationsVisitor } from './enumerationsVisitor';

/**
 * # Grammar
 * ```
 * enumeratedType: ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
export class EnumeratedTypeVisitor
  extends AbstractParseTreeVisitor<EnumeratedType>
  implements ASN_3gppVisitor<EnumeratedType> {
  public visitChildren(ctx: EnumeratedTypeContext): EnumeratedType {
    const enumerationsCtx = ctx.enumerations();
    const enumerations = enumerationsCtx.accept(new EnumerationsVisitor());
    return new EnumeratedType(enumerations);
  }

  protected defaultResult(): EnumeratedType {
    return new EnumeratedType([]);
  }
}
