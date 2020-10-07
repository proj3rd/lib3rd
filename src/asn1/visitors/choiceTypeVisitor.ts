/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ChoiceType } from '../classes/choiceType';
import { ChoiceTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AlternativeTypeListsVisitor } from './alternativeTypeListsVisitor';

/**
 * # Grammar
 * ```
 * choiceType: CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
export class ChoiceTypeVisitor extends AbstractParseTreeVisitor<ChoiceType>
  implements grammar3rdVisitor<ChoiceType> {
  public visitChildren(ctx: ChoiceTypeContext): ChoiceType {
    const alternativeTypeListsCtx = ctx.alternativeTypeLists();
    const alternativeTypeLists = alternativeTypeListsCtx.accept(
      new AlternativeTypeListsVisitor(),
    );
    return new ChoiceType(alternativeTypeLists);
  }

  protected defaultResult(): ChoiceType {
    return new ChoiceType([]);
  }
}
