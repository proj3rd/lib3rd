import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { AtNotation } from '../classes/atNotation';
import { AtNotationContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ComponentIdListVisitor } from './componentIdListVisitor';
import { LevelVisitor } from './levelVIsitor';

/**
 * # Grammar
 * ```
 * atNotation: (A_ROND | (A_ROND_DOT level)) componentIdList
 * ```
 */
export class AtNotationVisitor extends AbstractParseTreeVisitor<AtNotation>
  implements ASN_3gppVisitor<AtNotation> {
  public visitChildren(ctx: AtNotationContext): AtNotation {
    const levelCtx = ctx.level();
    const level =
      levelCtx === undefined ? 0 : levelCtx.accept(new LevelVisitor());
    const componentIdListCtx = ctx.componentIdList();
    const componentIdList = componentIdListCtx.accept(
      new ComponentIdListVisitor()
    );
    return new AtNotation(level, componentIdList);
  }

  protected defaultResult(): AtNotation {
    return unimpl();
  }
}
