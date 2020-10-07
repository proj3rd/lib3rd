import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ChoiceType } from '../classes/choiceType';
import { ChoiceTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * choiceType: CHOICE_LITERAL L_BRACE alternativeTypeLists R_BRACE
 * ```
 */
export declare class ChoiceTypeVisitor extends AbstractParseTreeVisitor<ChoiceType> implements grammar3rdVisitor<ChoiceType> {
    visitChildren(ctx: ChoiceTypeContext): ChoiceType;
    protected defaultResult(): ChoiceType;
}
//# sourceMappingURL=choiceTypeVisitor.d.ts.map