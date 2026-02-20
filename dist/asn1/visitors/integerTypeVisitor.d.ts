import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntegerType } from '../classes/integerType';
import { IntegerTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * integerType: INTEGER_LITERAL (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
export declare class IntegerTypeVisitor extends AbstractParseTreeVisitor<IntegerType> implements grammar3rdVisitor<IntegerType> {
    visitChildren(ctx: IntegerTypeContext): IntegerType;
    protected defaultResult(): IntegerType;
}
//# sourceMappingURL=integerTypeVisitor.d.ts.map