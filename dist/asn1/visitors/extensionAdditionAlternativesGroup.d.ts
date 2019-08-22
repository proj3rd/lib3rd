import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternativesGroupContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionAlternativesGroup } from '../classes/extensionAdditionAlternativesGroup';
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesGroup  :  DOUBLE_L_BRACKET  versionNumber  alternativeTypeList  DOUBLE_R_BRACKET
 * ```
 */
export declare class ExtensionAdditionAlternativesGroupVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternativesGroup> implements ASN_3gppVisitor<ExtensionAdditionAlternativesGroup> {
    defaultResult(): ExtensionAdditionAlternativesGroup;
    visitChildren(extensionAdditionAlternativesGroupCtx: ExtensionAdditionAlternativesGroupContext): ExtensionAdditionAlternativesGroup;
}
