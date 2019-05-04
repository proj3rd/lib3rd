import { Choice } from '../classes/choice';
/**
 * ANTLR4 grammar
 * ```
 * choiceType    : CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
export declare class ChoiceTypeVisitor {
    visitChildren(choiceTypeCtx: any): Choice;
}
