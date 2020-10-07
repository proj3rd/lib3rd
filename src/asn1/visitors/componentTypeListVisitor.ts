/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ComponentType } from '../classes/componentType';
import {
  ComponentTypeContext,
  ComponentTypeListContext,
  TagContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
  implements grammar3rdVisitor<ComponentType[]> {
  public visitChildren(ctx: ComponentTypeListContext): ComponentType[] {
    const sequenceComponents: ComponentType[] = [];
    const { childCount } = ctx;
    for (let i = 0; i < childCount; i += 1) {
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
