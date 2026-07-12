import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SignedNumberContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * signedNumber: (MINUS)? NUMBER
 * ```
 */
export declare class SignedNumberVisitor extends AbstractParseTreeVisitor<string> implements grammar3rdVisitor<string> {
    visitChildren(ctx: SignedNumberContext): string;
    protected defaultResult(): string;
}
//# sourceMappingURL=signedNumberVisitor.d.ts.map