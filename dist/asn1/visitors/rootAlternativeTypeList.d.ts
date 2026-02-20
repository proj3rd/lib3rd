import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { RootAlternativeTypeListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * rootAlternativeTypeList: alternativeTypeList
 * ```
 */
export declare class RootAlternativeTypeListVisitor extends AbstractParseTreeVisitor<NamedType[]> implements grammar3rdVisitor<NamedType[]> {
    visitChildren(ctx: RootAlternativeTypeListContext): NamedType[];
    protected defaultResult(): NamedType[];
}
//# sourceMappingURL=rootAlternativeTypeList.d.ts.map