import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Choice } from '../classes/choice';
import { ChoiceTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * choiceType    : CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
export declare class ChoiceTypeVisitor extends AbstractParseTreeVisitor<Choice> implements ASN_3gppVisitor<Choice> {
    defaultResult(): Choice;
    visitChildren(choiceTypeCtx: ChoiceTypeContext): Choice;
}
