import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ActualParameterListContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ActualParameter } from './actualParameter';
/**
 * ANTLR4 grammar
 * ```
 * actualParameterList : L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
export declare class ActualParameterListVisitor extends AbstractParseTreeVisitor<ActualParameter[]> implements ASN_3gppVisitor<ActualParameter[]> {
    defaultResult(): ActualParameter[];
    visitChildren(actualParameterListCtx: ActualParameterListContext): ActualParameter[];
}
