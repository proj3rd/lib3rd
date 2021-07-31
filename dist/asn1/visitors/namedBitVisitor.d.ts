import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedBitContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { INamedBit } from '../types/namedBit';
/**
 * # Grammar
 * ```
 * namedBit: IDENTIFIER L_PARAN (NUMBER | definedValue) R_PARAN
 * ```
 */
export declare class NamedBitVisitor extends AbstractParseTreeVisitor<INamedBit> implements grammar3rdVisitor<INamedBit> {
    visitChildren(ctx: NamedBitContext): INamedBit;
    protected defaultResult(): INamedBit;
}
//# sourceMappingURL=namedBitVisitor.d.ts.map