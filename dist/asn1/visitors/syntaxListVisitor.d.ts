import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Syntax } from '../classes/syntax';
import { SyntaxListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * syntaxList: L_BRACE tokenOrGroupSpec+ R_BRACE
 * ```
 * Currently, only supports `string[] PrimitiveFieldName` form
 */
export declare class SyntaxListVisitor extends AbstractParseTreeVisitor<Syntax[]> implements ASN_3gppVisitor<Syntax[]> {
    visitChildren(ctx: SyntaxListContext): Syntax[];
    protected defaultResult(): Syntax[];
}
//# sourceMappingURL=syntaxListVisitor.d.ts.map