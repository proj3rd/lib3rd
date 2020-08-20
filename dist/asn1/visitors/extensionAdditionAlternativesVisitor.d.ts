import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternative } from '../classes/choiceType';
import { ExtensionAdditionAlternativesContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionAlternatives: (COMMA extensionAdditionAlternativesList)?
 * ```
 */
export declare class ExtensionAdditionAlternativesVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]> implements ASN_3gppVisitor<ExtensionAdditionAlternative[]> {
    visitChildren(ctx: ExtensionAdditionAlternativesContext): ExtensionAdditionAlternative[];
    protected defaultResult(): ExtensionAdditionAlternative[];
}
//# sourceMappingURL=extensionAdditionAlternativesVisitor.d.ts.map