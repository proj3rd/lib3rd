import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ChoiceType } from '../classes/choiceType';
import { ChoiceTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AlternativeTypeListsVisitor } from './alternativeTypeListsVisitor';

/**
 * # Grammar
 * ```
 * choiceType: CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
export class ChoiceTypeVisitor extends AbstractParseTreeVisitor<ChoiceType>
  implements ASN_3gppVisitor<ChoiceType> {
  public visitChildren(ctx: ChoiceTypeContext): ChoiceType {
    const alternativeTypeListsCtx = ctx.alternativeTypeLists();
    const alternativeTypeLists = alternativeTypeListsCtx.accept(
      new AlternativeTypeListsVisitor()
    );
    return new ChoiceType(alternativeTypeLists);
  }

  protected defaultResult(): ChoiceType {
    return new ChoiceType([]);
  }
}
