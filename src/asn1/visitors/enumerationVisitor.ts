import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { EnumerationContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { EnumerationItemVisitor } from './enumerationItemVisitor';

/**
 * # Grammar
 * ```
 * enumeration: enumerationItem (COMMA enumerationItem)*
 * ```
 */
export class EnumerationVisitor
  extends AbstractParseTreeVisitor<EnumerationItem[]>
  implements ASN_3gppVisitor<EnumerationItem[]> {
  public visitChildren(ctx: EnumerationContext): EnumerationItem[] {
    const enumerationItemCtxes = ctx.enumerationItem();
    return enumerationItemCtxes.map((enumerationItemCtx) =>
      enumerationItemCtx.accept(new EnumerationItemVisitor())
    );
  }

  protected defaultResult(): EnumerationItem[] {
    return [];
  }
}
