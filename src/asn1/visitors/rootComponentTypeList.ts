import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { RootComponentTypeListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
import { ComponentTypeListVisitor } from './componentTypeList';

/**
 * ANTLR4 grammar
 * ```
 * rootComponentTypeList  : componentTypeList
 * ```
 */
export class RootComponentTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]>
                                          implements ASN_3gppVisitor<NamedType[]> {
  public defaultResult(): NamedType[] {
    return []];
  }

  public visitChildren(rootComponentTypeListCtx: RootComponentTypeListContext): NamedType[] {
    const componentTypeListCtx = rootComponentTypeListCtx.children[0];
    return componentTypeListCtx.accept(new ComponentTypeListVisitor());
  }
}
