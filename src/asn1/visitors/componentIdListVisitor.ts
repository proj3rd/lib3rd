/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ComponentIdListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * componentIdList: IDENTIFIER (DOT IDENTIFIER)*
 * ```
 */
export class ComponentIdListVisitor extends AbstractParseTreeVisitor<string[]>
  implements grammar3rdVisitor<string[]> {
  public visitChildren(ctx: ComponentIdListContext): string[] {
    const componentIdList: string[] = [];
    const { childCount } = ctx;
    for (let i = 0; i < childCount; i += 2) {
      componentIdList.push(ctx.getChild(i).text);
    }
    return componentIdList;
  }

  protected defaultResult(): string[] {
    return unimpl();
  }
}
