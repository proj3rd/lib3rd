import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedBitContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { INamedBit } from '../types';
/**
 * # Grammar
 * ```
 * namedBit: IDENTIFIER L_PARAN (NUMBER | definedValue) R_PARAN
 * ```
 */
export declare class NamedBitVisitor extends AbstractParseTreeVisitor<INamedBit> implements ASN_3gppVisitor<INamedBit> {
    visitChildren(ctx: NamedBitContext): INamedBit;
    protected defaultResult(): INamedBit;
}
//# sourceMappingURL=namedBitVisitor.d.ts.map