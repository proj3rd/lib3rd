import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SignedNumberContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * signedNumber: (MINUS)? NUMBER
 * ```
 */
export declare class SignedNumberVisitor extends AbstractParseTreeVisitor<string> implements ASN_3gppVisitor<string> {
    visitChildren(ctx: SignedNumberContext): string;
    protected defaultResult(): string;
}
//# sourceMappingURL=signedNumberVisitor.d.ts.map