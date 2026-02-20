import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Parameter } from '../classes/parameter';
import { ParameterContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * parameter: (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export declare class ParameterVisitor extends AbstractParseTreeVisitor<Parameter> implements grammar3rdVisitor<Parameter> {
    visitChildren(ctx: ParameterContext): Parameter;
    protected defaultResult(): Parameter;
}
//# sourceMappingURL=parameterVisitor.d.ts.map