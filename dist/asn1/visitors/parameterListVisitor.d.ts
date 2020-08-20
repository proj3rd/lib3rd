import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Parameter } from '../classes/parameter';
import { ParameterListContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * parameterList: L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
export declare class ParameterListVisitor extends AbstractParseTreeVisitor<Parameter[]> implements ASN_3gppVisitor<Parameter[]> {
    visitChildren(ctx: ParameterListContext): Parameter[];
    protected defaultResult(): Parameter[];
}
//# sourceMappingURL=parameterListVisitor.d.ts.map