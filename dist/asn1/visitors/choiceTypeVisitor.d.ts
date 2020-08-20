import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ChoiceType } from '../classes/choiceType';
import { ChoiceTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * choiceType: CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
export declare class ChoiceTypeVisitor extends AbstractParseTreeVisitor<ChoiceType> implements ASN_3gppVisitor<ChoiceType> {
    visitChildren(ctx: ChoiceTypeContext): ChoiceType;
    protected defaultResult(): ChoiceType;
}
//# sourceMappingURL=choiceTypeVisitor.d.ts.map