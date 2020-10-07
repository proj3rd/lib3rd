import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootChoiceComponents } from '../classes/choiceType';
import { AlternativeTypeListsContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * alternativeTypeLists: rootAlternativeTypeList
 *   (COMMA extensionAndException extensionAdditionAlternatives optionalExtensionMarker)?
 * ```
 */
export declare class AlternativeTypeListsVisitor extends AbstractParseTreeVisitor<RootChoiceComponents[]> implements grammar3rdVisitor<RootChoiceComponents[]> {
    visitChildren(ctx: AlternativeTypeListsContext): RootChoiceComponents[];
    protected defaultResult(): RootChoiceComponents[];
}
//# sourceMappingURL=alternativeTypeListsVisitor.d.ts.map