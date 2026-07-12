/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ComponentType } from '../classes/componentType';
import { ExtensionAddition } from '../classes/sequenceType';
import {
  ExtensionAdditionContext,
  ExtensionAdditionListContext,
  TagContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ExtensionAdditionVisitor } from './extensionAdditionVisitor';
import { TagVisitor } from './tagVisitor';

/**
 * # Grammar
 * ```
 * extensionAdditionList: (extensionAddition) (COMMA tag? extensionAddition)*
 * ```
 */
export class ExtensionAdditionListVisitor
  extends AbstractParseTreeVisitor<ExtensionAddition[]>
  implements grammar3rdVisitor<ExtensionAddition[]> {
  public visitChildren(ctx: ExtensionAdditionListContext): ExtensionAddition[] {
    const extensionAdditionList: ExtensionAddition[] = [];
    for (let i = 0; i < ctx.childCount; i += 1) {
      const childCtx = ctx.getChild(i);
      if (childCtx instanceof ExtensionAdditionContext) {
        extensionAdditionList.push(
          childCtx.accept(new ExtensionAdditionVisitor()),
        );
      } else if (childCtx instanceof TagContext) {
        const tag = childCtx.accept(new TagVisitor());
        const { length } = extensionAdditionList;
        const lastComponent = extensionAdditionList[length - 1];
        if (lastComponent instanceof ComponentType) {
          lastComponent.tag = tag;
        } else {
          throw Error();
        }
      }
    }
    return extensionAdditionList;
  }

  protected defaultResult(): ExtensionAddition[] {
    return unimpl();
  }
}
