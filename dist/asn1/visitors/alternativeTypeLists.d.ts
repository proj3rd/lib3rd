import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AlternativeTypeListsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { NamedType } from '../classes/namedType';
export declare type AlternativeTypeLists = Array<NamedType | ExtensionMarker>;
/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeLists :   rootAlternativeTypeList (COMMA
 *    extensionAndException  extensionAdditionAlternatives  optionalExtensionMarker )?
 * ```
 */
export declare class AlternativeTypeListsVisitor extends AbstractParseTreeVisitor<AlternativeTypeLists> implements ASN_3gppVisitor<AlternativeTypeLists> {
    defaultResult(): AlternativeTypeLists;
    visitChildren(alternativeTypeListsCtx: AlternativeTypeListsContext): AlternativeTypeLists;
}
