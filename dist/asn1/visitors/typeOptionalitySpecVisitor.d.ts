import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Optionality } from '../classes/optionality';
import { TypeOptionalitySpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * typeOptionalitySpec: OPTIONAL_LITERAL | (DEFAULT_LITERAL asnType)
 * ```
 */
export declare class TypeOptionalitySpecVisitor extends AbstractParseTreeVisitor<Optionality> implements grammar3rdVisitor<Optionality> {
    visitChildren(ctx: TypeOptionalitySpecContext): Optionality;
    protected defaultResult(): Optionality;
}
//# sourceMappingURL=typeOptionalitySpecVisitor.d.ts.map