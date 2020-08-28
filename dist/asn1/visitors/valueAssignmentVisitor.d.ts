import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ValueAssignmentContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { ITypeAndValue } from '../types';
/**
 * # Grammar
 * ```
 * valueAssignment: asnType ASSIGN_OP value
 * ```
 */
export declare class ValueAssignmentVisitor extends AbstractParseTreeVisitor<ITypeAndValue> implements ASN_3gppVisitor<ITypeAndValue> {
    visitChildren(ctx: ValueAssignmentContext): ITypeAndValue;
    protected defaultResult(): ITypeAndValue;
}
//# sourceMappingURL=valueAssignmentVisitor.d.ts.map