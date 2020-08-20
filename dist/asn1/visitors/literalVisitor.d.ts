import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { LiteralContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * literal: IDENTIFIER | COMMA
 * ```
 */
export declare class LiteralVisitor extends AbstractParseTreeVisitor<string> implements ASN_3gppVisitor<string> {
    visitChildren(ctx: LiteralContext): string;
    protected defaultResult(): string;
}
//# sourceMappingURL=literalVisitor.d.ts.map