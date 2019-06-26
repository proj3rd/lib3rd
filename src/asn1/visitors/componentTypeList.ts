import { getContextName } from '../utils';
import { ComponentTypeVisitor } from './componentType';
import { TagVisitor } from './tag';

/**
 * ANTLR4 grammar
 * ```
 * componentTypeList  : (componentType) (COMMA tag? componentType)*
 * ```
 */
export class ComponentTypeListVisitor {
  public visitChildren(componentTypeListCtx: any): any /* TODO */ {
    const childCtxes = componentTypeListCtx.children;
    const componentTypeList = [];
    childCtxes.forEach((childCtx: any, index: number) => {
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
