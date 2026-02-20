import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Syntax } from '../classes/syntax';
import { SyntaxListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * syntaxList: L_BRACE tokenOrGroupSpec+ R_BRACE
 * ```
 * Currently, only supports `string[] PrimitiveFieldName` form
 */
export declare class SyntaxListVisitor extends AbstractParseTreeVisitor<Syntax[]> implements grammar3rdVisitor<Syntax[]> {
    visitChildren(ctx: SyntaxListContext): Syntax[];
    protected defaultResult(): Syntax[];
}
//# sourceMappingURL=syntaxListVisitor.d.ts.map