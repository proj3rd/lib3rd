import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { LevelContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * level: (DOT level)?
 * ```
 */
export class LevelVisitor extends AbstractParseTreeVisitor<number>
  implements ASN_3gppVisitor<number> {
  public visitChildren(ctx: LevelContext): number {
    const levelCtx = ctx.level();
    if (levelCtx === undefined) {
      return 0;
    }
    return 1 + levelCtx.accept(new LevelVisitor());
  }

  protected defaultResult(): number {
    return unimpl();
  }
}
