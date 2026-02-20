import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ActualParameterContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ActualParameter } from '../types/actualParamter';
/**
 * # Grammar
 * ```
 * actualParameter: asnType | value
 * ```
 */
export declare class ActualParameterVisitor extends AbstractParseTreeVisitor<ActualParameter> implements grammar3rdVisitor<ActualParameter> {
    visitChildren(ctx: ActualParameterContext): ActualParameter;
    protected defaultResult(): ActualParameter;
}
//# sourceMappingURL=actualParameterVisitor.d.ts.map