import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ComponentTypeContext, ComponentTypeListContext, TagContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { NamedType } from '../classes/namedType';
import { ComponentTypeVisitor } from './componentType';
import { TagVisitor } from './tag';

/**
 * ANTLR4 grammar
 * ```
 * componentTypeList  : (componentType) (COMMA tag? componentType)*
 * ```
 */
export class ComponentTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]>
                                      implements ASN_3gppVisitor<NamedType[]> {
  public defaultResult(): NamedType[] {
    return [];
  }

  public visitChildren(componentTypeListCtx: ComponentTypeListContext): NamedType[] {
    const childCtxes = componentTypeListCtx.children;
    const componentTypeList = [];
    childCtxes.forEach((childCtx) => {
      if (childCtx instanceof ComponentTypeContext) {
        const componentType = childCtx.accept(new ComponentTypeVisitor());
        if (componentType) {
          componentTypeList.push(componentType);
        }
      } else if (childCtx instanceof TagContext) {
        const tag = childCtx.accept(new TagVisitor());
        if (tag) {
          componentTypeList[componentTypeList.length - 1].tag = tag;
        }
      } else {
        // Do nothing
      }
    });
    return componentTypeList;
  }
}
