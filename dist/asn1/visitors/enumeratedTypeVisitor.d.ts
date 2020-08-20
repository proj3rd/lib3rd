import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { EnumeratedType } from '../classes/enumeratedType';
import { EnumeratedTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * enumeratedType: ENUMERATED_LITERAL L_BRACE enumerations R_BRACE
 * ```
 */
export declare class EnumeratedTypeVisitor extends AbstractParseTreeVisitor<EnumeratedType> implements ASN_3gppVisitor<EnumeratedType> {
    visitChildren(ctx: EnumeratedTypeContext): EnumeratedType;
    protected defaultResult(): EnumeratedType;
}
//# sourceMappingURL=enumeratedTypeVisitor.d.ts.map