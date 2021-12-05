import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Reference } from '../classes/reference';
import { ReferenceContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { ExponentParenthesisVisitor } from './exponentParenthesisVisitor';

/**
 * # Grammar
 * ```
 * reference: '<' IDENTIFIER exponent_parenthesis? '>';
 * ```
 */
export class ReferenceVisitor extends AbstractParseTreeVisitor<Reference> implements csn3rdVisitor<Reference> {
  public visitChildren(ctx: ReferenceContext): Reference {
    const name = ctx.getChild(1).text;
    const exponentParenthesisCtx = ctx.exponent_parenthesis();
    const exponentParenthesis = exponentParenthesisCtx?.accept(new ExponentParenthesisVisitor());
    return new Reference(name, exponentParenthesis);
  }

  protected defaultResult(): Reference {
    return unimpl();
  }
}
