import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SignedNumberContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * signedNumber :  (MINUS)? NUMBER
 * ```
 */
export declare class SignedNumberVisitor extends AbstractParseTreeVisitor<number> implements ASN_3gppVisitor<number> {
    defaultResult(): number;
    visitChildren(signedNumberCtx: SignedNumberContext): number;
}
