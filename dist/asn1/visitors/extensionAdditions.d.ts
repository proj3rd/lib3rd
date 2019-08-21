import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAddition } from './extensionAddition';
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditions  :  (COMMA  extensionAdditionList)?
 * ```
 */
export declare class ExtensionAdditionsVisitor extends AbstractParseTreeVisitor<ExtensionAddition[]> implements ASN_3gppVisitor<ExtensionAddition[]> {
    defaultResult(): ExtensionAddition[];
    visitChildren(extensionAdditionsCtx: ExtensionAdditionsContext): ExtensionAddition[];
}
