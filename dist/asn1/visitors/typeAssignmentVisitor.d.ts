import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnType } from '../classes/asnType';
import { TypeAssignmentContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
/**
 * # Grammar
 * ```
 * typeAssignment: ASSIGN_OP asnType
 * ```
 */
export declare class TypeAssignmentVisitor extends AbstractParseTreeVisitor<AsnType> implements grammar3rdVisitor<AsnType> {
    visitChildren(ctx: TypeAssignmentContext): AsnType;
    protected defaultResult(): AsnType;
}
//# sourceMappingURL=typeAssignmentVisitor.d.ts.map