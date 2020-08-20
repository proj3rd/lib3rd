import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ParamGovernorContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ParamGovernor } from '../types';
/**
 * # Grammar
 * ```
 * paramGovernor: governor | IDENTIFIER
 * ```
 */
export declare class ParamGovernorVisitor extends AbstractParseTreeVisitor<ParamGovernor> implements ASN_3gppVisitor<ParamGovernor> {
    visitChildren(ctx: ParamGovernorContext): ParamGovernor;
    protected defaultResult(): ParamGovernor;
}
//# sourceMappingURL=paramGovernorVisitor.d.ts.map