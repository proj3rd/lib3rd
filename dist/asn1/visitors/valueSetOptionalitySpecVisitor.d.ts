import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Optionality } from '../classes/optionality';
import { ValueSetOptionalitySpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * valueSetOptionalitySpec: OPTIONAL_LITERAL | DEFAULT_LITERAL valueSet
 * ```
 */
export declare class ValueSetOptionalitySpecVisitor extends AbstractParseTreeVisitor<Optionality> implements ASN_3gppVisitor<Optionality> {
    visitChildren(ctx: ValueSetOptionalitySpecContext): Optionality;
    protected defaultResult(): Optionality;
}
//# sourceMappingURL=valueSetOptionalitySpecVisitor.d.ts.map