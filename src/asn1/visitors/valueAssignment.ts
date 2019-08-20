import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { ValueAssignmentContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';

import { BuiltinValue } from './builtinValue';
import { ValueVisitor } from './value';

/**
 * ANTLR4 grammar
 * ```
 * valueAssignment :
 *       asnType
 * 	   ASSIGN_OP
 *        value
 * ```
 */
export class ValueAssignmentVisitor extends AbstractParseTreeVisitor<BuiltinValue>
                                    implements ASN_3gppVisitor<BuiltinValue> {
  public defaultResult(): BuiltinValue {
    return undefined;
  }

  public visitChildren(valueAssignmentCtx: ValueAssignmentContext): BuiltinValue {
    const valueCtx = valueAssignmentCtx.children[2];
    return valueCtx.accept(new ValueVisitor());
  }
}
