import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Unions } from '../classes/unions';
import { AdditionalElementSetSpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * additionalElementSetSpec: elementSetSpec
 * ```
 */
export declare class AdditionalElementSetSpecVisitor extends AbstractParseTreeVisitor<Unions> implements ASN_3gppVisitor<Unions> {
    visitChildren(ctx: AdditionalElementSetSpecContext): Unions;
    protected defaultResult(): Unions;
}
//# sourceMappingURL=additionalElementSetSpecVisitor.d.ts.map