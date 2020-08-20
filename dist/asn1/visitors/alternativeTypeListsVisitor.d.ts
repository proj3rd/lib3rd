import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { RootChoiceComponents } from '../classes/choiceType';
import { AlternativeTypeListsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * alternativeTypeLists: rootAlternativeTypeList
 *   (COMMA extensionAndException extensionAdditionAlternatives optionalExtensionMarker)?
 * ```
 */
export declare class AlternativeTypeListsVisitor extends AbstractParseTreeVisitor<RootChoiceComponents[]> implements ASN_3gppVisitor<RootChoiceComponents[]> {
    visitChildren(ctx: AlternativeTypeListsContext): RootChoiceComponents[];
    protected defaultResult(): RootChoiceComponents[];
}
//# sourceMappingURL=alternativeTypeListsVisitor.d.ts.map