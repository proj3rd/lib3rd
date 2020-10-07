import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ValueAssignmentContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ITypeAndValue } from '../types';
/**
 * # Grammar
 * ```
 * valueAssignment: asnType ASSIGN_OP value
 * ```
 */
export declare class ValueAssignmentVisitor extends AbstractParseTreeVisitor<ITypeAndValue> implements grammar3rdVisitor<ITypeAndValue> {
    visitChildren(ctx: ValueAssignmentContext): ITypeAndValue;
    protected defaultResult(): ITypeAndValue;
}
//# sourceMappingURL=valueAssignmentVisitor.d.ts.map