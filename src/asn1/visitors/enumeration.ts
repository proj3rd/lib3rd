import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { EnumerationContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { EnumerationItem, EnumerationItemVisitor } from './enumerationItem';

/**
 * ANTLR4 grammar
 * ```
 * enumeration : enumerationItem ( COMMA enumerationItem)*
 * ```
 */
export class EnumerationVisitor extends AbstractParseTreeVisitor<EnumerationItem[]>
                                implements ASN_3gppVisitor<EnumerationItem[]> {
  public defaultResult(): EnumerationItem[] {
    return [];
  }

  public visitChildren(enumerationCtx: EnumerationContext): EnumerationItem[] {
    const childCtxes = enumerationCtx.children;
    const enumeration = [];
    childCtxes.forEach((childCtx, index) => {
      if (index  % 2) {
        return;
      }
      enumeration.push(childCtx.accept(new EnumerationItemVisitor()));
    });
    return enumeration;
  }
}
