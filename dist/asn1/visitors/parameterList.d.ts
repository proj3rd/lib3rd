import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParameterListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Parameter } from '../classes/parameter';
/**
 * ANTLR4 grammar
 * ```
 * parameterList : L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
export declare class ParameterListVisitor extends AbstractParseTreeVisitor<Parameter[]> implements ASN_3gppVisitor<Parameter[]> {
    defaultResult(): Parameter[];
    visitChildren(parameterListCtx: ParameterListContext): Parameter[];
}
