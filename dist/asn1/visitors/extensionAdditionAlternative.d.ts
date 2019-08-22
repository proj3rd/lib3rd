import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ExtensionAdditionAlternativeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionAdditionAlternativesGroup } from '../classes/extensionAdditionAlternativesGroup';
import { NamedType } from '../classes/namedType';
export declare type ExtensionAdditionAlternative = ExtensionAdditionAlternativesGroup | NamedType;
/**
 * ANTR4 grammar
 * ```
 * extensionAdditionAlternative  :  extensionAdditionAlternativesGroup | namedType
 * ```
 */
export declare class ExtensionAdditionAlternativeVisitor extends AbstractParseTreeVisitor<ExtensionAdditionAlternative> implements ASN_3gppVisitor<ExtensionAdditionAlternative> {
    defaultResult(): ExtensionAdditionAlternative;
    visitChildren(extensionAdditionAlternativeCtx: ExtensionAdditionAlternativeContext): ExtensionAdditionAlternative;
}
