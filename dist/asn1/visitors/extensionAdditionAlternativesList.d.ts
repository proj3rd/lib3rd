import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternativesListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionAlternative } from './extensionAdditionAlternative';
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionAlternativesList  : (extensionAdditionAlternative) (COMMA  extensionAdditionAlternative)*
 * ```
 */
export declare class ExtensionAdditionAlternativesListVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative[]> implements ASN_3gppVisitor<ExtensionAdditionAlternative[]> {
    defaultResult(): ExtensionAdditionAlternative[];
    visitChildren(extensionAdditionAlternativesListCtx: ExtensionAdditionAlternativesListContext): ExtensionAdditionAlternative[];
}
