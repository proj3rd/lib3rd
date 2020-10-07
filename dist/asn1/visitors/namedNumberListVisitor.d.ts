import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedNumberListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { INamedNumber } from '../types';
/**
 * # Grammar
 * ```
 * namedNumberList: (namedNumber) (COMMA namedNumber)*
 * ```
 */
export declare class NamedNumberListVisitor extends AbstractParseTreeVisitor<INamedNumber[]> implements grammar3rdVisitor<INamedNumber[]> {
    visitChildren(ctx: NamedNumberListContext): INamedNumber[];
    protected defaultResult(): INamedNumber[];
}
//# sourceMappingURL=namedNumberListVisitor.d.ts.map