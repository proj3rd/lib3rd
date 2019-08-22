import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { RootAlternativeTypeListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
import { AlternativeTypeListVisitor } from './alternativeTypeList';

/**
 * ANTLR4 grammar
 * ```
 * rootAlternativeTypeList  : alternativeTypeList
 * ```
 */
export class RootAlternativeTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]>
                                            implements ASN_3gppVisitor<NamedType[]> {
  public defaultResult(): NamedType[] {
    return [];
  }

  public visitChildren(rootAlternativeTypeListCtx: RootAlternativeTypeListContext): NamedType[] {
    const alternativeTypeListCtx = rootAlternativeTypeListCtx.children[0];
    return alternativeTypeListCtx.accept(new AlternativeTypeListVisitor());
  }
}
