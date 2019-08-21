import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { Choice } from '../classes/choice';

import { ChoiceTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AlternativeTypeListsVisitor } from './alternativeTypeLists';

/**
 * ANTLR4 grammar
 * ```
 * choiceType    : CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
export class ChoiceTypeVisitor extends AbstractParseTreeVisitor<Choice> implements ASN_3gppVisitor<Choice> {
  public defaultResult(): Choice {
    return undefined;
  }

  public visitChildren(choiceTypeCtx: ChoiceTypeContext): Choice {
    const alternativeTypeListsCtx = choiceTypeCtx.children[2];
    const alternativeTypeLists = alternativeTypeListsCtx.accept(new AlternativeTypeListsVisitor());
    return new Choice(alternativeTypeLists);
  }
}
