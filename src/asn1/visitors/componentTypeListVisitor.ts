import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentType } from '../classes/componentType';
import {
  ComponentTypeContext,
  ComponentTypeListContext,
  TagContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ComponentTypeVisitor } from './componentTypeVisitor';
import { TagVisitor } from './tagVisitor';

/**
 * # Grammar
 * ```
 * componentTypeList: (componentType) (COMMA tag? componentType)*
 * ```
 */
export class ComponentTypeListVisitor
  extends AbstractParseTreeVisitor<ComponentType[]>
  implements ASN_3gppVisitor<ComponentType[]> {
  public visitChildren(ctx: ComponentTypeListContext): ComponentType[] {
    const sequenceComponents: ComponentType[] = [];
    const childCount = ctx.childCount;
    for (let i = 0; i < childCount; i++) {
      const childCtx = ctx.getChild(i);
      if (childCtx instanceof ComponentTypeContext) {
        sequenceComponents.push(childCtx.accept(new ComponentTypeVisitor()));
      } else if (childCtx instanceof TagContext) {
        const tag = childCtx.accept(new TagVisitor());
        const { length } = sequenceComponents;
        const lastComponent = sequenceComponents[length - 1];
        if (lastComponent === undefined) {
          throw Error();
        }
        lastComponent.tag = tag;
      }
    }
    return sequenceComponents;
  }

  protected defaultResult(): ComponentType[] {
    return [];
  }
}
