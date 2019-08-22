import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionGroupContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionGroup } from '../classes/extensionAdditionGroup';
/**
 * ANTLR4 grammar
 * ```
 * extensionAdditionGroup  :  DOUBLE_L_BRACKET  versionNumber  componentTypeList tag?  DOUBLE_R_BRACKET
 * ```
 */
export declare class ExtensionAdditionGroupVisitor extends AbstractParseTreeVisitor<ExtensionAdditionGroup> implements ASN_3gppVisitor<ExtensionAdditionGroup> {
    defaultResult(): ExtensionAdditionGroup;
    visitChildren(extensionAdditionGroupCtx: ExtensionAdditionGroupContext): ExtensionAdditionGroup;
}
