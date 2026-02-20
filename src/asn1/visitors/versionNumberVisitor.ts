/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { VersionNumberContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * versionNumber: (NUMBER COLON)?
 * ```
 */
export class VersionNumberVisitor
  extends AbstractParseTreeVisitor<number | undefined>
  implements grammar3rdVisitor<number | undefined> {
  public visitChildren(ctx: VersionNumberContext): number | undefined {
    if (ctx.childCount === 0) {
      return undefined;
    }
    const firstCtx = ctx.getChild(0);
    return +firstCtx.text;
  }

  protected defaultResult(): number | undefined {
    return unimpl();
  }
}
