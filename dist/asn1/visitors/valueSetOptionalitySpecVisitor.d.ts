import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Optionality } from '../classes/optionality';
import { ValueSetOptionalitySpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * valueSetOptionalitySpec: OPTIONAL_LITERAL | DEFAULT_LITERAL valueSet
 * ```
 */
export declare class ValueSetOptionalitySpecVisitor extends AbstractParseTreeVisitor<Optionality> implements grammar3rdVisitor<Optionality> {
    visitChildren(ctx: ValueSetOptionalitySpecContext): Optionality;
    protected defaultResult(): Optionality;
}
//# sourceMappingURL=valueSetOptionalitySpecVisitor.d.ts.map