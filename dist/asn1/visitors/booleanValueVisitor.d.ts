import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BooleanValue } from '../classes/booleanValue';
import { BooleanValueContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * booleanValue: TRUE_LITERAL | FALSE_LITERAL | TRUE_SMALL_LITERAL | FALSE_SMALL_LITERAL
 * ```
 */
export declare class BooleanValueVisitor extends AbstractParseTreeVisitor<BooleanValue> implements grammar3rdVisitor<BooleanValue> {
    visitChildren(ctx: BooleanValueContext): BooleanValue;
    protected defaultResult(): BooleanValue;
}
//# sourceMappingURL=booleanValueVisitor.d.ts.map