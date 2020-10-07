import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Parameter } from '../classes/parameter';
import { ParameterListContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * parameterList: L_BRACE parameter (COMMA parameter)* R_BRACE
 * ```
 */
export declare class ParameterListVisitor extends AbstractParseTreeVisitor<Parameter[]> implements grammar3rdVisitor<Parameter[]> {
    visitChildren(ctx: ParameterListContext): Parameter[];
    protected defaultResult(): Parameter[];
}
//# sourceMappingURL=parameterListVisitor.d.ts.map