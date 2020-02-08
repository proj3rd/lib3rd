import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParameterListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { IParameter } from './parameter';
/**
 * ANTLR4 grammar
 * ```
 * parameterList : L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
export declare class ParameterListVisitor extends AbstractParseTreeVisitor<IParameter[]> implements ASN_3gppVisitor<IParameter[]> {
    defaultResult(): IParameter[];
    visitChildren(parameterListCtx: ParameterListContext): IParameter[];
}
