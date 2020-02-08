import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NamedNumberListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
export interface INamedNumberList {
    [named: string]: number;
}
/**
 * ANTLR4 grammar
 * ```
 * namedNumberList : (namedNumber) (COMMA namedNumber)*
 * ```
 */
export declare class NamedNumberListVisitor extends AbstractParseTreeVisitor<INamedNumberList> implements ASN_3gppVisitor<INamedNumberList> {
    defaultResult(): INamedNumberList;
    visitChildren(namedNumberListCtx: NamedNumberListContext): INamedNumberList;
}
