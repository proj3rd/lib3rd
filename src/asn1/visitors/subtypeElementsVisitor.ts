/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ValueRange } from '../classes/valueRange';
import { SubtypeElementsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { SubtypeElements } from '../types/subtypeElements';
import { SizeConstraintVisitor } from './sizeConstraintVisitor';
import { ValueVisitor } from './valueVisitor';

/**
 * subtypeElements :
 *   ((value | MIN_LITERAL) LESS_THAN?  DOUBLE_DOT LESS_THAN? (value | MAX_LITERAL))
 *   | sizeConstraint
 *   | (PATTERN_LITERAL value)
 *   | value
 */
export class SubtypeElementsVisitor
  extends AbstractParseTreeVisitor<SubtypeElements>
  implements grammar3rdVisitor<SubtypeElements> {
  public visitChildren(ctx: SubtypeElementsContext): SubtypeElements {
    const { childCount } = ctx;
    if (childCount === 1) {
      const sizeConstraintCtx = ctx.sizeConstraint();
      if (sizeConstraintCtx !== undefined) {
        return sizeConstraintCtx.accept(new SizeConstraintVisitor());
      }
      const valueCtxes = ctx.value();
      if (valueCtxes.length > 0) {
        const valueCtx = valueCtxes[0];
        return valueCtx.accept(new ValueVisitor());
      }
      throw Error();
    } else if (childCount === 2) {
      const valueCtx = ctx.value();
      if (valueCtx !== undefined) {
        return unimpl();
      }
      throw Error();
    } else if (childCount === 3 || childCount === 4 || childCount === 5) {
      const valueCtxes = ctx.value();
      if (valueCtxes.length !== 2) {
        return unimpl();
      }
      const [lower, upper] = valueCtxes.map((valueCtx) => valueCtx.accept(new ValueVisitor()));
      return new ValueRange(lower, upper);
    }
    throw Error();
  }

  protected defaultResult(): SubtypeElements {
    return unimpl();
  }
}
