import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParameterContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
/**
 * ANTLR4 grammar
 * ```
 * parameter : (paramGovernor COLON)? IDENTIFIER
 * ```
 */
export declare class ParameterVisitor extends AbstractParseTreeVisitor<string> implements ASN_3gppVisitor<string> {
    defaultResult(): string;
    visitChildren(parameterCtx: ParameterContext): string;
}
