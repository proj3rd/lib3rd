import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedNumberListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { INamedNumber } from '../types';
/**
 * # Grammar
 * ```
 * namedNumberList: (namedNumber) (COMMA namedNumber)*
 * ```
 */
export declare class NamedNumberListVisitor extends AbstractParseTreeVisitor<INamedNumber[]> implements ASN_3gppVisitor<INamedNumber[]> {
    visitChildren(ctx: NamedNumberListContext): INamedNumber[];
    protected defaultResult(): INamedNumber[];
}
//# sourceMappingURL=namedNumberListVisitor.d.ts.map