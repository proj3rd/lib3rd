import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Parameter } from '../classes/parameter';
import { ParameterContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * parameter: (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export declare class ParameterVisitor extends AbstractParseTreeVisitor<Parameter> implements ASN_3gppVisitor<Parameter> {
    visitChildren(ctx: ParameterContext): Parameter;
    protected defaultResult(): Parameter;
}
//# sourceMappingURL=parameterVisitor.d.ts.map