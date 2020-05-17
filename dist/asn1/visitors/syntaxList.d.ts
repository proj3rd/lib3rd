import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { SyntaxListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Syntax } from '../classes/syntax';
export declare function syntaxesFrom(tokens: Array<string | Syntax>, optional?: boolean): Syntax[];
/**
 * ANTLR4 grammar
 * ```
 * syntaxList : L_BRACE tokenOrGroupSpec+ R_BRACE
 * ```
 */
export declare class SyntaxListVisitor extends AbstractParseTreeVisitor<Syntax[]> implements ASN_3gppVisitor<Syntax[]> {
    defaultResult(): Syntax[];
    visitChildren(syntaxListCtx: SyntaxListContext): Syntax[];
}
