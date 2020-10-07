import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumeratedType } from '../classes/enumeratedType';
import { EnumeratedTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * enumeratedType: ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
export declare class EnumeratedTypeVisitor extends AbstractParseTreeVisitor<EnumeratedType> implements grammar3rdVisitor<EnumeratedType> {
    visitChildren(ctx: EnumeratedTypeContext): EnumeratedType;
    protected defaultResult(): EnumeratedType;
}
//# sourceMappingURL=enumeratedTypeVisitor.d.ts.map