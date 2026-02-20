import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedNumberContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { INamedNumber } from '../types/namedNumber';
/**
 * # Grammar
 * ```
 * namedNumber: IDENTIFIER L_PARAN (signedNumber | definedValue) R_PARAN
 * ```
 */
export declare class NamedNumberVisitor extends AbstractParseTreeVisitor<INamedNumber> implements grammar3rdVisitor<INamedNumber> {
    visitChildren(ctx: NamedNumberContext): INamedNumber;
    protected defaultResult(): INamedNumber;
}
//# sourceMappingURL=namedNumberVisitor.d.ts.map