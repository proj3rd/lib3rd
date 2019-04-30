import { Choice } from '../classes/choice';
import { AlternativeTypeListsVisitor } from './alternativeTypeLists';

/**
 * ANTLR4 grammar
 * ```
 * choiceType    : CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
export class ChoiceTypeVisitor {
  public visitChildren(choiceTypeCtx: any): any /* TODO */ {
    const alternativeTypeListsCtx = choiceTypeCtx.children[2];
    const alternativeTypeLists = alternativeTypeListsCtx.accept(new AlternativeTypeListsVisitor());
    return new Choice(alternativeTypeLists);
  }
}
