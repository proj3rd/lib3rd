import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { FieldNameContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * fieldName: (AMPERSAND IDENTIFIER) (DOT AMPERSAND IDENTIFIER)*
 * ```
 */
export declare class FieldNameVisitor extends AbstractParseTreeVisitor<PrimitiveFieldName[]> implements ASN_3gppVisitor<PrimitiveFieldName[]> {
    visitChildren(ctx: FieldNameContext): PrimitiveFieldName[];
    protected defaultResult(): PrimitiveFieldName[];
}
//# sourceMappingURL=fieldNameVisitor.d.ts.map