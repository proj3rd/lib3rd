import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternativesContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionAlternative } from './extensionAdditionAlternative';
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternatives  : (COMMA  extensionAdditionAlternativesList )?
 * ```
 */
export declare class ExtensionAdditionAlternativesVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]> implements ASN_3gppVisitor<ExtensionAdditionAlternative[]> {
    defaultResult(): ExtensionAdditionAlternative[];
    visitChildren(extensionAdditionAlternativesCtx: ExtensionAdditionAlternativesContext): ExtensionAdditionAlternative[];
}
