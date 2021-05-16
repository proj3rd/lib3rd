import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParamGovernorContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ParamGovernor } from '../types/paramGovernor';
/**
 * # Grammar
 * ```
 * paramGovernor: governor | IDENTIFIER
 * ```
 */
export declare class ParamGovernorVisitor extends AbstractParseTreeVisitor<ParamGovernor> implements grammar3rdVisitor<ParamGovernor> {
    visitChildren(ctx: ParamGovernorContext): ParamGovernor;
    protected defaultResult(): ParamGovernor;
}
//# sourceMappingURL=paramGovernorVisitor.d.ts.map