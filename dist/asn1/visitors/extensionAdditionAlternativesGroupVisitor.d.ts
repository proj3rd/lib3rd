import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternativeGroup } from '../classes/extensionAdditionAlternativeGroup';
import { ExtensionAdditionAlternativesGroupContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * extensionAdditionAlternativesGroup: DOUBLE_L_BRACKET versionNumber alternativeTypeList DOUBLE_R_BRACKET
 * ```
 */
export declare class ExtensionAdditionAlternativesGroupVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternativeGroup> implements ASN_3gppVisitor<ExtensionAdditionAlternativeGroup> {
    visitChildren(ctx: ExtensionAdditionAlternativesGroupContext): ExtensionAdditionAlternativeGroup;
    protected defaultResult(): ExtensionAdditionAlternativeGroup;
}
//# sourceMappingURL=extensionAdditionAlternativesGroupVisitor.d.ts.map