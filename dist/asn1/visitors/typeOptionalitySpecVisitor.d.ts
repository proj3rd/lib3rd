import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Optionality } from '../classes/optionality';
import { TypeOptionalitySpecContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * typeOptionalitySpec: OPTIONAL_LITERAL | (DEFAULT_LITERAL asnType)
 * ```
 */
export declare class TypeOptionalitySpecVisitor extends AbstractParseTreeVisitor<Optionality> implements ASN_3gppVisitor<Optionality> {
    visitChildren(ctx: TypeOptionalitySpecContext): Optionality;
    protected defaultResult(): Optionality;
}
//# sourceMappingURL=typeOptionalitySpecVisitor.d.ts.map