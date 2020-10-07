/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { AtNotation } from '../classes/atNotation';
import { AtNotationContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ComponentIdListVisitor } from './componentIdListVisitor';
import { LevelVisitor } from './levelVIsitor';

/**
 * # Grammar
 * ```
 * atNotation: (A_ROND | (A_ROND_DOT level)) componentIdList
 * ```
 */
export class AtNotationVisitor extends AbstractParseTreeVisitor<AtNotation>
  implements grammar3rdVisitor<AtNotation> {
  public visitChildren(ctx: AtNotationContext): AtNotation {
    const levelCtx = ctx.level();
    const level = levelCtx === undefined ? 0 : levelCtx.accept(new LevelVisitor());
    const componentIdListCtx = ctx.componentIdList();
    const componentIdList = componentIdListCtx.accept(
      new ComponentIdListVisitor(),
    );
    return new AtNotation(level, componentIdList);
  }

  protected defaultResult(): AtNotation {
    return unimpl();
  }
}
