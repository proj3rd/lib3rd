import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ReferencedType } from '../classes/asnType';
import { ReferencedTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * referencedType: definedType
 * ```
 */
export declare class ReferencedTypeVisitor extends AbstractParseTreeVisitor<ReferencedType> implements ASN_3gppVisitor<ReferencedType> {
    visitChildren(ctx: ReferencedTypeContext): ReferencedType;
    protected defaultResult(): ReferencedType;
}
//# sourceMappingURL=referencedTypeVisitor.d.ts.map