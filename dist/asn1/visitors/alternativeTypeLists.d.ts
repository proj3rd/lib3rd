import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AlternativeTypeListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * alternativeTypeLists :   rootAlternativeTypeList (COMMA
 *    extensionAndException  extensionAdditionAlternatives  optionalExtensionMarker )?
 * ```
 */
export declare class AlternativeTypeListsVisitor extends AbstractParseTreeVisitor<any> implements ASN_3gppVisitor<any> {
    defaultResult(): any;
    visitChildren(alternativeTypeListsCtx: AlternativeTypeListContext): any;
}
