import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Unions } from '../classes/unions';
import { UnionsContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * unions: (intersections) (unionMark intersections)*
 * ```
 */
export declare class UnionsVisitor extends AbstractParseTreeVisitor<Unions> implements ASN_3gppVisitor<Unions> {
    visitChildren(ctx: UnionsContext): Unions;
    protected defaultResult(): Unions;
}
//# sourceMappingURL=unionsVisitor.d.ts.map