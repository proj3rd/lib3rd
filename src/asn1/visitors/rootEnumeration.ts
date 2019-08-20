import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { RootEnumerationContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { EnumerationVisitor } from './enumeration';
import { EnumerationItem } from './enumerationItem';

/**
 * ANTLR4 grammar
 * ```
 * rootEnumeration : enumeration
 * ```
 */
export class RootEnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]>
                                    implements ASN_3gppVisitor<EnumerationItem[]> {
  public defaultResult(): EnumerationItem[] {
    return [];
  }

  public visitChildren(rootEnumerationCtx: RootEnumerationContext): EnumerationItem[] {
    const enumerationCtx = rootEnumerationCtx.children[0];
    return enumerationCtx.accept(new EnumerationVisitor());
  }
}
