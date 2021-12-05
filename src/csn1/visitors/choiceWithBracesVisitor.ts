import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Choice } from '../classes/choice';
import { Choice_with_bracesContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { ChoiceVisitor } from './choiceVisitor';

/**
 * # Grammar
 * ```
 * choice_with_braces: '{' choice '}';
 * ```
 */
export class ChoiceWithBracesVisitor extends AbstractParseTreeVisitor<Choice> implements csn3rdVisitor<Choice> {
  public visitChildren(ctx: Choice_with_bracesContext): Choice {
    const choiceCtx = ctx.choice();
    const choice = choiceCtx.accept(new ChoiceVisitor());
    return choice;
  }

  protected defaultResult(): Choice {
    return unimpl();
  }
}