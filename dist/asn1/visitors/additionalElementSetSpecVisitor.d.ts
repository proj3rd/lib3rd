import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Unions } from '../classes/unions';
import { AdditionalElementSetSpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * additionalElementSetSpec: elementSetSpec
 * ```
 */
export declare class AdditionalElementSetSpecVisitor extends AbstractParseTreeVisitor<Unions> implements grammar3rdVisitor<Unions> {
    visitChildren(ctx: AdditionalElementSetSpecContext): Unions;
    protected defaultResult(): Unions;
}
//# sourceMappingURL=additionalElementSetSpecVisitor.d.ts.map