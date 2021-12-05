import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Concatenation } from '../classes/concatenation';
import { ConcatenationContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { ConcatableExpressionVisitor } from './concatableExpressionVisitor';

/**
 * # Grammar
 * ```
 * concatenation: concatable_expression+;
 * ```
 */
export class ConcatenationVisitor extends AbstractParseTreeVisitor<Concatenation> implements csn3rdVisitor<Concatenation> {
  public visitChildren(ctx: ConcatenationContext): Concatenation {
    const children = ctx.concatable_expression();
    const concatableExpressionList = children.map((child) => child.accept(new ConcatableExpressionVisitor()));
    return new Concatenation(concatableExpressionList);
  }

  protected defaultResult(): Concatenation {
    return unimpl();
  }
}
