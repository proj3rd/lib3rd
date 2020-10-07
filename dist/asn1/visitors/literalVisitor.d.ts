import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { LiteralContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * literal: IDENTIFIER | COMMA
 * ```
 */
export declare class LiteralVisitor extends AbstractParseTreeVisitor<string> implements grammar3rdVisitor<string> {
    visitChildren(ctx: LiteralContext): string;
    protected defaultResult(): string;
}
//# sourceMappingURL=literalVisitor.d.ts.map