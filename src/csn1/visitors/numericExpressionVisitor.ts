import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Numeric_expressionContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';

/**
 * # Grammar
 * ```
 * numeric_expression:
  numeric_expression '+' numeric_expression
  | numeric_expression '-' numeric_expression
  | numeric_expression '*' numeric_expression
  | '(' numeric_expression ')'
  | IDENTIFIER ('(' numeric_expression ')')?
 * ```
 */
export class NumericExpressionVisitor extends AbstractParseTreeVisitor<string> implements csn3rdVisitor<string> {
  public visitChildren(ctx: Numeric_expressionContext): string {
    return ctx.text;
  }

  protected defaultResult(): string {
    return unimpl();
  }
}
