import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Choice } from '../classes/choice';
import { ChoiceContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { ConcatenationVisitor } from './concatenationVisitor';

/**
 * # Grammar
 * ```
 * choice: concatenation (('|' | '!') concatenation)+;
 * ```
 */
export class ChoiceVisitor extends AbstractParseTreeVisitor<Choice> implements csn3rdVisitor<Choice> {
  public visitChildren(ctx: ChoiceContext): Choice {
    const children = ctx.concatenation();
    const concatenationList = children.map((child) => child.accept(new ConcatenationVisitor()));
    return new Choice(concatenationList);
  }

  protected defaultResult(): Choice {
    return unimpl();
  }
}
