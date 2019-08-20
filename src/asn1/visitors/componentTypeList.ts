import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { getContextName } from '../utils';

import { ComponentTypeListContext } from '../ASN_3gppParser';
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
      switch (getContextName(childCtx)) {
        case 'componentType': {
          const componentType = childCtx.accept(new ComponentTypeVisitor());
          if (componentType) {
            componentTypeList.push(componentType);
          }
          break;
        }
        case 'tag': {
          const tag = childCtx.accept(new TagVisitor());
          if (tag) {
            componentTypeList[componentTypeList.length - 1].tag = tag;
          }
          break;
        }
        default: {
          return;
        }
      }
    });
    return componentTypeList;
  }
}
