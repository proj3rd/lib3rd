import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Syntax } from '../classes/syntax';
import { OptionalGroupContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * optionalGroup: L_BRACKET (tokenOrGroupSpec)+ R_BRACKET
 * ```
 * Currently, only supports `[string[] PrimitiveFieldName]` form
 */
export declare class OptionalGroupVisitor extends AbstractParseTreeVisitor<Syntax> implements ASN_3gppVisitor<Syntax> {
    visitChildren(ctx: OptionalGroupContext): Syntax;
    protected defaultResult(): Syntax;
}
//# sourceMappingURL=optionalGroupVisitor.d.ts.map