import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { OctetStringTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { OctetString } from '../classes/octetString';
/**
 * ANTLR4 grammar
 * ```
 * octetStringType  :  OCTET_LITERAL STRING_LITERAL
 * ```
 */
export declare class OctetStringTypeVisitor extends AbstractParseTreeVisitor<OctetString> implements ASN_3gppVisitor<OctetString> {
    defaultResult(): OctetString;
    visitChildren(octetStringTypeCtx: OctetStringTypeContext): OctetString;
}
