import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { PrimitiveFieldNameContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * primitiveFieldName: AMPERSAND IDENTIFIER
 * ```
 */
export declare class PrimitiveFieldNameVisitor extends AbstractParseTreeVisitor<PrimitiveFieldName> implements ASN_3gppVisitor<PrimitiveFieldName> {
    visitChildren(ctx: PrimitiveFieldNameContext): PrimitiveFieldName;
    protected defaultResult(): PrimitiveFieldName;
}
//# sourceMappingURL=primitiveFieldNameVisitor.d.ts.map