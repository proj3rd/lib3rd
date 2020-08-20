import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntegerValue } from '../classes/integerValue';
import { IntegerValueContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * integerValue: signedNumber | IDENTIFIER
 * ```
 */
export declare class IntegerValueVisitor extends AbstractParseTreeVisitor<IntegerValue> implements ASN_3gppVisitor<IntegerValue> {
    visitChildren(ctx: IntegerValueContext): IntegerValue;
    protected defaultResult(): IntegerValue;
}
//# sourceMappingURL=integerValueVisitor.d.ts.map