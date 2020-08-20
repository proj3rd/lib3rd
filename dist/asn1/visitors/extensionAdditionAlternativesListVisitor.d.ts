import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import { ExtensionAdditionAlternativesListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionAlternativesList: (extensionAdditionAlternative) (COMMA extensionAdditionAlternative)*
 * ```
 */
export declare class ExtensionAdditionAlternativesListVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]> implements ASN_3gppVisitor<ExtensionAdditionAlternative[]> {
    visitChildren(ctx: ExtensionAdditionAlternativesListContext): ExtensionAdditionAlternative[];
    protected defaultResult(): ExtensionAdditionAlternative[];
}
//# sourceMappingURL=extensionAdditionAlternativesListVisitor.d.ts.map