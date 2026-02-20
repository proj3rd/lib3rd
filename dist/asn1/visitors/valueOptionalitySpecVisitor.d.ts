import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Optionality } from '../classes/optionality';
import { ValueOptionalitySpecContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * valueOptionalitySpec: OPTIONAL_LITERAL | (DEFAULT_LITERAL value)
 * ```
 */
export declare class ValueOptionalitySpecVisitor extends AbstractParseTreeVisitor<Optionality> implements grammar3rdVisitor<Optionality> {
    visitChildren(ctx: ValueOptionalitySpecContext): Optionality;
    protected defaultResult(): Optionality;
}
//# sourceMappingURL=valueOptionalitySpecVisitor.d.ts.map