import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumeratedValueContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * enumeratedValue: IDENTIFIER
 * ```
 */
export declare class EnumeratedValueVisitor extends AbstractParseTreeVisitor<string> implements ASN_3gppVisitor<string> {
    visitChildren(ctx: EnumeratedValueContext): string;
    protected defaultResult(): string;
}
//# sourceMappingURL=enumeratedValueVisitor.d.ts.map