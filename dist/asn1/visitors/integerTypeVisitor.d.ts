import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { IntegerType } from '../classes/integerType';
import { IntegerTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * integerType: INTEGER_LITERAL (L_BRACE namedNumberList R_BRACE)?
 * ```
 */
export declare class IntegerTypeVisitor extends AbstractParseTreeVisitor<IntegerType> implements ASN_3gppVisitor<IntegerType> {
    visitChildren(ctx: IntegerTypeContext): IntegerType;
    protected defaultResult(): IntegerType;
}
//# sourceMappingURL=integerTypeVisitor.d.ts.map