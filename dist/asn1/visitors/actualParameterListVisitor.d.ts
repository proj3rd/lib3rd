import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ActualParameter } from '../classes/parameterizedType';
import { ActualParameterListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * actualParameterList: L_BRACE actualParameter (COMMA actualParameter)* R_BRACE
 * ```
 */
export declare class ActualParameterListVisitor extends AbstractParseTreeVisitor<ActualParameter[]> implements grammar3rdVisitor<ActualParameter[]> {
    visitChildren(ctx: ActualParameterListContext): ActualParameter[];
    protected defaultResult(): ActualParameter[];
}
//# sourceMappingURL=actualParameterListVisitor.d.ts.map