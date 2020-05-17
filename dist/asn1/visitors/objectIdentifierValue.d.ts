import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectIdentifierValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
/**
 * ANTLR4 grammar
 * ```
 * objectIdentifierValue : L_BRACE objIdComponentsList R_BRACE
 * ```
 */
export declare class ObjectIdentifierValueVisitor extends AbstractParseTreeVisitor<ObjectIdentifierValue> implements ASN_3gppVisitor<ObjectIdentifierValue> {
    defaultResult(): ObjectIdentifierValue;
    visitChildren(objectIdentifierValueCtx: ObjectIdentifierValueContext): ObjectIdentifierValue;
}
