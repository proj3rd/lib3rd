import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectIdentifierValue } from '../classes/objectIdentifierValue';
import { ObjectIdentifierValueContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * objectIdentifierValue: L_BRACE objIdComponentsList R_BRACE
 * ```
 */
export declare class ObjectIdentifierValueVisitor extends AbstractParseTreeVisitor<ObjectIdentifierValue> implements ASN_3gppVisitor<ObjectIdentifierValue> {
    visitChildren(ctx: ObjectIdentifierValueContext): ObjectIdentifierValue;
    protected defaultResult(): ObjectIdentifierValue;
}
//# sourceMappingURL=objectIdentifierValueVisitor.d.ts.map