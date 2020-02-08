import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedNumberContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
export interface INamedNumber {
    name: string;
    num: number;
}
/**
 * ANTLR4 grammar
 * ```
 * namedNumber :   IDENTIFIER L_PARAN (signedNumber | definedValue) R_PARAN
 * ```
 */
export declare class NamedNumberVisitor extends AbstractParseTreeVisitor<INamedNumber> implements ASN_3gppVisitor<INamedNumber> {
    defaultResult(): INamedNumber;
    visitChildren(namedNumberCtx: NamedNumberContext): INamedNumber;
}
