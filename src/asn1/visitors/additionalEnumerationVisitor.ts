import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../_devUtils';
import { EnumerationItem } from '../classes/enumeratedType';
import { AdditionalEnumerationContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { EnumerationVisitor } from './enumerationVisitor';

/**
 * # Grammar
 * ```
 * additionalEnumeration: enumeration
 * ```
 */
export class AdditionalEnumerationVisitor
  extends AbstractParseTreeVisitor<EnumerationItem[]>
  implements ASN_3gppVisitor<EnumerationItem[]> {
  public visitChildren(ctx: AdditionalEnumerationContext): EnumerationItem[] {
    const enumerationCtx = ctx.enumeration();
    return enumerationCtx.accept(new EnumerationVisitor());
  }

  protected defaultResult(): EnumerationItem[] {
    return unimpl();
  }
}
