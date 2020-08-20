import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ActualParameter } from '../classes/parameterizedType';
import { ActualParameterListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * actualParameterList: L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
export declare class ActualParameterListVisitor extends AbstractParseTreeVisitor<ActualParameter[]> implements ASN_3gppVisitor<ActualParameter[]> {
    visitChildren(ctx: ActualParameterListContext): ActualParameter[];
    protected defaultResult(): ActualParameter[];
}
//# sourceMappingURL=actualParameterListVisitor.d.ts.map