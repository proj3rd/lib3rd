import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationItem } from '../classes/enumeratedType';
import { RootEnumerationContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { EnumerationVisitor } from './enumerationVisitor';

/**
 * # Grammar
 * ```
 * rootEnumeration: enumeration
 * ```
 */
export class RootEnumerationVisitor
  extends AbstractParseTreeVisitor<EnumerationItem[]>
  implements ASN_3gppVisitor<EnumerationItem[]> {
  public visitChildren(ctx: RootEnumerationContext): EnumerationItem[] {
    const enumerationCtx = ctx.enumeration();
    return enumerationCtx.accept(new EnumerationVisitor());
  }

  protected defaultResult(): EnumerationItem[] {
    return [];
  }
}
