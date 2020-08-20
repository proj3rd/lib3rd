import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnType } from '../classes/asnType';
import { TypeAssignmentContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
/**
 * # Grammar
 * ```
 * typeAssignment: ASSIGN_OP asnType
 * ```
 */
export declare class TypeAssignmentVisitor extends AbstractParseTreeVisitor<AsnType> implements ASN_3gppVisitor<AsnType> {
    visitChildren(ctx: TypeAssignmentContext): AsnType;
    protected defaultResult(): AsnType;
}
//# sourceMappingURL=typeAssignmentVisitor.d.ts.map