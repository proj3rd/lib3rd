import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ValueAssignmentContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { BuiltinValue } from './builtinValue';
/**
 * ANTLR4 grammar
 * ```
 * valueAssignment :
 *       asnType
 * 	   ASSIGN_OP
 *        value
 * ```
 */
export declare class ValueAssignmentVisitor extends AbstractParseTreeVisitor<BuiltinValue> implements ASN_3gppVisitor<BuiltinValue> {
    defaultResult(): BuiltinValue;
    visitChildren(valueAssignmentCtx: ValueAssignmentContext): BuiltinValue;
}
