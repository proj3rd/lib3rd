import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntegerValueContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
export declare type AsnIntegerValue = number | string;
/**
 * ANTLR4 grammar
 * ```
 * integerValue :  signedNumber | IDENTIFIER
 * ```
 */
export declare class IntegerValueVisitor extends AbstractParseTreeVisitor<AsnIntegerValue> implements ASN_3gppVisitor<AsnIntegerValue> {
    defaultResult(): AsnIntegerValue;
    visitChildren(integerValueCtx: IntegerValueContext): number | string;
}
