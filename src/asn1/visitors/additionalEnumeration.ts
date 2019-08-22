import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { AdditionalEnumerationContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { EnumerationVisitor } from './enumeration';
import { EnumerationItem } from './enumerationItem';

/**
 * ANTLR4 grammar
 * ```
 * additionalEnumeration : enumeration
 * ```
 */
export class AdditionalEnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]>
                                          implements ASN_3gppVisitor<EnumerationItem[]> {
  public defaultResult(): EnumerationItem[] {
    return [];
  }

  public visitChildren(additionalEnumerationCtx: AdditionalEnumerationContext): EnumerationItem[] {
    const enumerationCtx = additionalEnumerationCtx.children[0];
    return enumerationCtx.accept(new EnumerationVisitor());
  }
}
