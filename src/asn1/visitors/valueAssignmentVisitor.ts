import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { ITypeAndValue } from '../classes/assignment';
import { ValueAssignmentContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { unimpl } from './_devUtils';
import { AsnTypeVisitor } from './asnTypeVisitor';
import { ValueVisitor } from './valueVisitor';

/**
 * # Grammar
 * ```
 * valueAssignment: asnType ASSIGN_OP value
 * ```
 */
export class ValueAssignmentVisitor
  extends AbstractParseTreeVisitor<ITypeAndValue>
  implements ASN_3gppVisitor<ITypeAndValue> {
  public visitChildren(ctx: ValueAssignmentContext): ITypeAndValue {
    const asnTypeCtx = ctx.asnType();
    const asnType = asnTypeCtx.accept(new AsnTypeVisitor());
    const valueCtx = ctx.value();
    const value = valueCtx.accept(new ValueVisitor());
    return { asnType, value };
  }

  protected defaultResult(): ITypeAndValue {
    return unimpl();
  }
}
