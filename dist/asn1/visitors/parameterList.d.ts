import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParameterListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * parameterList : L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
export declare class ParameterListVisitor extends AbstractParseTreeVisitor<string[]> implements ASN_3gppVisitor<string[]> {
    defaultResult(): string[];
    visitChildren(parameterListCtx: ParameterListContext): string[];
}
