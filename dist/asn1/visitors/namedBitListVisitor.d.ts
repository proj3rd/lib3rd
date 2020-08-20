import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedBitListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { INamedBit } from '../types';
/**
 * # Grammar
 * ```
 * namedBitList: (namedBit) (COMMA namedBit)*
 * ```
 */
export declare class NamedBitListVisitor extends AbstractParseTreeVisitor<INamedBit[]> implements ASN_3gppVisitor<INamedBit[]> {
    visitChildren(ctx: NamedBitListContext): INamedBit[];
    protected defaultResult(): INamedBit[];
}
//# sourceMappingURL=namedBitListVisitor.d.ts.map