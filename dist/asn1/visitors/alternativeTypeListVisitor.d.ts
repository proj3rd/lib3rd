import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { AlternativeTypeListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * alternativeTypeList: (namedType) (COMMA namedType)*
 * ```
 */
export declare class AlternativeTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]> implements grammar3rdVisitor<NamedType[]> {
    visitChildren(ctx: AlternativeTypeListContext): NamedType[];
    protected defaultResult(): NamedType[];
}
//# sourceMappingURL=alternativeTypeListVisitor.d.ts.map