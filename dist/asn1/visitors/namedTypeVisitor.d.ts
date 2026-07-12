import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedType } from '../classes/namedType';
import { NamedTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * namedType: IDENTIFIER asnType
 * ```
 */
export declare class NamedTypeVisitor extends AbstractParseTreeVisitor<NamedType> implements grammar3rdVisitor<NamedType> {
    visitChildren(ctx: NamedTypeContext): NamedType;
    protected defaultResult(): NamedType;
}
//# sourceMappingURL=namedTypeVisitor.d.ts.map