import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { PrimitiveFieldName } from '../classes/primitiveFieldName';
import { FieldNameContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * fieldName: (AMPERSAND IDENTIFIER) (DOT AMPERSAND IDENTIFIER)*
 * ```
 */
export declare class FieldNameVisitor extends AbstractParseTreeVisitor<PrimitiveFieldName[]> implements grammar3rdVisitor<PrimitiveFieldName[]> {
    visitChildren(ctx: FieldNameContext): PrimitiveFieldName[];
    protected defaultResult(): PrimitiveFieldName[];
}
//# sourceMappingURL=fieldNameVisitor.d.ts.map