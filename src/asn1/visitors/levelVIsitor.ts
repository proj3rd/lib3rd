/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { LevelContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';

/**
 * # Grammar
 * ```
 * level: (DOT level)?
 * ```
 */
export class LevelVisitor extends AbstractParseTreeVisitor<number>
  implements grammar3rdVisitor<number> {
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
