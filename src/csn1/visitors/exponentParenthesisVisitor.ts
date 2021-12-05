import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { ExponentParenthesis } from '../classes/exponentParenthesis';
import { Exponent_parenthesisContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { NumericExpressionVisitor } from './numericExpressionVisitor';

/**
 * # Grammar
 * ```
 * exponent_parenthesis:
  '(' '*' ')'
  | '(' numeric_expression ')'
 * ```
 */
export class ExponentParenthesisVisitor extends AbstractParseTreeVisitor<ExponentParenthesis> implements csn3rdVisitor<ExponentParenthesis> {
  public visitChildren(ctx: Exponent_parenthesisContext): ExponentParenthesis {
    const numericExpressionCtx = ctx.numeric_expression();
    const numericExpression = numericExpressionCtx?.accept(new NumericExpressionVisitor());
    return new ExponentParenthesis(numericExpression);
  }

  protected defaultResult(): ExponentParenthesis {
    return unimpl();
  }
}
