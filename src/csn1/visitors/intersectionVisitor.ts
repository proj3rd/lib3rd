import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Intersection } from '../classes/intersection';
import { Reference } from '../classes/reference';
import { IntersectionContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { ChoiceWithBracesVisitor } from './choiceWithBracesVisitor';
import { ExponentParenthesisVisitor } from './exponentParenthesisVisitor';

/**
 * # Grammar
 * ```
 * intersection:
  '&'
  (
    IDENTIFIER exponent_parenthesis?
    | choice_with_braces
  )
 * ```
 */
export class IntersectionVisitor extends AbstractParseTreeVisitor<Intersection> implements csn3rdVisitor<Intersection> {
  public visitChildren(ctx: IntersectionContext): Intersection {
    const exponentParenthesisCtx = ctx.exponent_parenthesis();
    const choiceWithBracesCtx = ctx.choice_with_braces();
    if (choiceWithBracesCtx) {
      const choiceWithBraces = choiceWithBracesCtx.accept(new ChoiceWithBracesVisitor());
      return new Intersection(choiceWithBraces);
    } else {
      const name = ctx.getChild(1).text;
      const exponentParenthesis = exponentParenthesisCtx?.accept(new ExponentParenthesisVisitor());
      const reference = new Reference(name, exponentParenthesis);
      return new Intersection(reference);
    }
    return unimpl();
  }

  protected defaultResult(): Intersection {
    return unimpl();
  }
}
