import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ObjectIdentifierType } from '../classes/objectIdentifierType';
import { ObjectidentifiertypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * objectidentifiertype: OBJECT_LITERAL IDENTIFIER_LITERAL
 * ```
 */
export declare class ObjectidentifiertypeVisitor extends AbstractParseTreeVisitor<ObjectIdentifierType> implements ASN_3gppVisitor<ObjectIdentifierType> {
    visitChildren(ctx: ObjectidentifiertypeContext): ObjectIdentifierType;
    protected defaultResult(): ObjectIdentifierType;
}
//# sourceMappingURL=objectIdentifierTypeVisitor.d.ts.map