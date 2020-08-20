import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Optionality } from '../classes/optionality';
import { ValueOptionalitySpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * valueOptionalitySpec: OPTIONAL_LITERAL | (DEFAULT_LITERAL value)
 * ```
 */
export declare class ValueOptionalitySpecVisitor extends AbstractParseTreeVisitor<Optionality> implements ASN_3gppVisitor<Optionality> {
    visitChildren(ctx: ValueOptionalitySpecContext): Optionality;
    protected defaultResult(): Optionality;
}
//# sourceMappingURL=valueOptionalitySpecVisitor.d.ts.map