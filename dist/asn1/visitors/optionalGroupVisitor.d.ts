import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { Syntax } from '../classes/syntax';
import { OptionalGroupContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * optionalGroup: L_BRACKET (tokenOrGroupSpec)+ R_BRACKET
 * ```
 * Currently, only supports `[string[] PrimitiveFieldName]` form
 */
export declare class OptionalGroupVisitor extends AbstractParseTreeVisitor<Syntax> implements grammar3rdVisitor<Syntax> {
    visitChildren(ctx: OptionalGroupContext): Syntax;
    protected defaultResult(): Syntax;
}
//# sourceMappingURL=optionalGroupVisitor.d.ts.map