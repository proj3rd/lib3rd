import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumerationsContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { EnumerationItem } from './enumerationItem';
export declare type Enumerations = Array<EnumerationItem | ExtensionMarker>;
/**
 * ANTLR4 grammar
 * ```
 * rootEnumeration (COMMA   ELLIPSIS exceptionSpec? (COMMA   additionalEnumeration )?)?
 * ```
 */
export declare class EnumerationsVisitor extends AbstractParseTreeVisitor<Enumerations> implements ASN_3gppVisitor<Enumerations> {
    defaultResult(): Enumerations;
    visitChildren(enumerationsCtx: EnumerationsContext): Enumerations;
}
