import {AbstractParseTreeVisitor} from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { todo, unimpl } from 'unimpl';
import { Definition } from '../classes/definition';
import { DefinitionContext } from '../grammar/csn3rdParser';
import { csn3rdVisitor } from '../grammar/csn3rdVisitor';
import { ChoiceVisitor } from './choiceVisitor';
import { ConcatenationVisitor } from './concatenationVisitor';

/**
 * # Grammar
 * ```
 * '<' IDENTIFIER '>' '::=' (choice | concatenation) ';'
 * ```
 */
export class DefinitionVisitor extends AbstractParseTreeVisitor<Definition> implements csn3rdVisitor<Definition> {
  public visitChildren(ctx: DefinitionContext): Definition {
    const name = ctx.getChild(1).text;
    const choiceCtx = ctx.choice();
    const concatenationCtx = ctx.concatenation();
    if (choiceCtx) {
      const choice = choiceCtx.accept(new ChoiceVisitor());
      return new Definition(name, choice);
    } else if (concatenationCtx) {
      const concatenation = concatenationCtx.accept(new ConcatenationVisitor());
      return new Definition(name, concatenation);
    } else {
      unimpl();
    }
  }

  protected defaultResult(): Definition {
    return unimpl();
  }
}
