import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedBitListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { INamedBit } from '../types';
/**
 * # Grammar
 * ```
 * namedBitList: (namedBit) (COMMA namedBit)*
 * ```
 */
export declare class NamedBitListVisitor extends AbstractParseTreeVisitor<INamedBit[]> implements grammar3rdVisitor<INamedBit[]> {
    visitChildren(ctx: NamedBitListContext): INamedBit[];
    protected defaultResult(): INamedBit[];
}
//# sourceMappingURL=namedBitListVisitor.d.ts.map