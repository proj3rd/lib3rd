import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectIdentifierValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * objectIdentifierValue : L_BRACE objIdComponentsList R_BRACE
 * ```
 */
export declare class ObjectIdentifierValueVisitor extends AbstractParseTreeVisitor<any> implements ASN_3gppVisitor<any> {
    defaultResult(): any;
    visitChildren(objectIdentifierValueCtx: ObjectIdentifierValueContext): any;
}
