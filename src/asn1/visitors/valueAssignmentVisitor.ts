/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from '../../utils/unimpl';
import { ValueAssignmentContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { ITypeAndValue } from '../types';
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
  implements grammar3rdVisitor<ITypeAndValue> {
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
