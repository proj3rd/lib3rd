import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParameterContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Parameter } from '../classes/parameter';
/**
 * ANTLR4 grammar
 * ```
 * parameter : (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export declare class ParameterVisitor extends AbstractParseTreeVisitor<Parameter> implements ASN_3gppVisitor<Parameter> {
    defaultResult(): Parameter;
    visitChildren(parameterCtx: ParameterContext): Parameter;
}
