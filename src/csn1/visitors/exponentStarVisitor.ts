import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { ExponentStar } from '../classes/exponentStar';
import { Exponent_starContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { ExponentParenthesisVisitor } from './exponentParenthesisVisitor';
import { NumericExpressionVisitor } from './numericExpressionVisitor';

/**
 * # Grammar
 * ```
 * exponent_star:
  '**'
  | '*' (exponent_parenthesis | numeric_expression)
 * ```
 */
export class ExponentStarVisitor extends AbstractParseTreeVisitor<ExponentStar> implements csn3rdVisitor<ExponentStar> {
  public visitChildren(ctx: Exponent_starContext): ExponentStar {
    const exponentParenthesisCtx = ctx.exponent_parenthesis();
    const numericExpressionCtx = ctx.numeric_expression();
    const exponentParenthesis = exponentParenthesisCtx?.accept(new ExponentParenthesisVisitor());
    const numericExpression = numericExpressionCtx?.accept(new NumericExpressionVisitor());
    const exponent = exponentParenthesis ?? numericExpression;
    return new ExponentStar(exponent);
  }

  protected defaultResult(): ExponentStar {
    return unimpl();
  }
}
