import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { ExponentParenthesis } from '../classes/exponentParenthesis';
import { ExponentStar } from '../classes/exponentStar';
import { ExponentContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { ExponentParenthesisVisitor } from './exponentParenthesisVisitor';
import { ExponentStarVisitor } from './exponentStarVisitor';

export type Exponent = ExponentParenthesis | ExponentStar;

/**
 * # Grammar
 * ```
 * exponent: exponent_parenthesis | exponent_star;
 * ```
 */
export class ExponentVisitor extends AbstractParseTreeVisitor<Exponent> implements csn3rdVisitor<Exponent> {
  public visitChildren(ctx: ExponentContext): Exponent {
    const exponentParenthesisCtx = ctx.exponent_parenthesis();
    const exponentStarCtx = ctx.exponent_star();
    if (exponentParenthesisCtx) {
      return exponentParenthesisCtx.accept(new ExponentParenthesisVisitor());
    } else if (exponentStarCtx) {
      return exponentStarCtx.accept(new ExponentStarVisitor());
    } else {
      unimpl();
    }
  }

  protected defaultResult(): Exponent {
    return unimpl();
  }
}