import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAddition } from './extensionAddition';
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionList  :  (extensionAddition) (COMMA tag? extensionAddition)*
 * ```
 */
export declare class ExtensionAdditionListVisitor extends AbstractParseTreeVisitor<ExtensionAddition[]> implements ASN_3gppVisitor<ExtensionAddition[]> {
    defaultResult(): ExtensionAddition[];
    visitChildren(extensionAdditionListCtx: ExtensionAdditionListContext): ExtensionAddition[];
}
