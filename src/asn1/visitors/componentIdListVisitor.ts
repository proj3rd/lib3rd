import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ComponentIdListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * componentIdList: IDENTIFIER (DOT IDENTIFIER)*
 * ```
 */
export class ComponentIdListVisitor extends AbstractParseTreeVisitor<string[]>
  implements ASN_3gppVisitor<string[]> {
  public visitChildren(ctx: ComponentIdListContext): string[] {
    const componentIdList: string[] = [];
    const childCount = ctx.childCount;
    for (let i = 0; i < childCount; i += 2) {
      componentIdList.push(ctx.getChild(i).text);
    }
    return componentIdList;
  }

  protected defaultResult(): string[] {
    return unimpl();
  }
}
