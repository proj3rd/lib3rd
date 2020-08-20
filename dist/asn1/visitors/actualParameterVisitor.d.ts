import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ActualParameter } from '../classes/parameterizedType';
import { ActualParameterContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * actualParameter: asnType | value
 * ```
 */
export declare class ActualParameterVisitor extends AbstractParseTreeVisitor<ActualParameter> implements ASN_3gppVisitor<ActualParameter> {
    visitChildren(ctx: ActualParameterContext): ActualParameter;
    protected defaultResult(): ActualParameter;
}
//# sourceMappingURL=actualParameterVisitor.d.ts.map