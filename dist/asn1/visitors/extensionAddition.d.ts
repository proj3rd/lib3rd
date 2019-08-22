import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionGroup } from '../classes/extensionAdditionGroup';
import { NamedType } from '../classes/namedType';
export declare type ExtensionAddition = NamedType | ExtensionAdditionGroup;
/**
 * ANTLR4 grammar
 * ```
 * extensionAddition  : componentType  |  extensionAdditionGroup
 * ```
 */
export declare class ExtensionAdditionVisitor extends AbstractParseTreeVisitor<ExtensionAddition> implements ASN_3gppVisitor<ExtensionAddition> {
    defaultResult(): ExtensionAddition;
    visitChildren(extensionAdditionCtx: ExtensionAdditionContext): ExtensionAddition;
}
