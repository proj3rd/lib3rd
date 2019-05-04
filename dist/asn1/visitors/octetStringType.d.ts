import { OctetString } from '../classes/octetString';
/**
 * ANTLR4 grammar
 * ```
 * octetStringType  :  OCTET_LITERAL STRING_LITERAL
 * ```
 */
export declare class OctetStringTypeVisitor {
    visitChildren(octetStringTypeCtx: any): OctetString;
}
