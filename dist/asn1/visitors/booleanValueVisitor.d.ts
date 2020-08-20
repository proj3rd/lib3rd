import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { BooleanValue } from '../classes/booleanValue';
import { BooleanValueContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * booleanValue: TRUE_LITERAL | FALSE_LITERAL | TRUE_SMALL_LITERAL | FALSE_SMALL_LITERAL
 * ```
 */
export declare class BooleanValueVisitor extends AbstractParseTreeVisitor<BooleanValue> implements ASN_3gppVisitor<BooleanValue> {
    visitChildren(ctx: BooleanValueContext): BooleanValue;
    protected defaultResult(): BooleanValue;
}
//# sourceMappingURL=booleanValueVisitor.d.ts.map