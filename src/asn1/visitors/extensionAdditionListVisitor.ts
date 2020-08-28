import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ComponentType } from '../classes/componentType';
import { ExtensionAddition } from '../classes/sequenceType';
import {
  ExtensionAdditionContext,
  ExtensionAdditionListContext,
  TagContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
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
  implements ASN_3gppVisitor<ExtensionAddition[]> {
  public visitChildren(ctx: ExtensionAdditionListContext): ExtensionAddition[] {
    const extensionAdditionList: ExtensionAddition[] = [];
    for (let i = 0; i < ctx.childCount; i++) {
      const childCtx = ctx.getChild(i);
      if (childCtx instanceof ExtensionAdditionContext) {
        extensionAdditionList.push(
          childCtx.accept(new ExtensionAdditionVisitor())
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
