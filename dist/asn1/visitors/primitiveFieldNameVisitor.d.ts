import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { PrimitiveFieldNameContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * primitiveFieldName: AMPERSAND IDENTIFIER
 * ```
 */
export declare class PrimitiveFieldNameVisitor extends AbstractParseTreeVisitor<PrimitiveFieldName> implements grammar3rdVisitor<PrimitiveFieldName> {
    visitChildren(ctx: PrimitiveFieldNameContext): PrimitiveFieldName;
    protected defaultResult(): PrimitiveFieldName;
}
//# sourceMappingURL=primitiveFieldNameVisitor.d.ts.map