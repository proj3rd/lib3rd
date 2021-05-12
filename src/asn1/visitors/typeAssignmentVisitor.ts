/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { NullType } from '../classes/nullType';
import { TypeAssignmentContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AsnType } from '../types/asnType';
import { AsnTypeVisitor } from './asnTypeVisitor';

/**
 * # Grammar
 * ```
 * typeAssignment: ASSIGN_OP asnType
 * ```
 */
export class TypeAssignmentVisitor extends AbstractParseTreeVisitor<AsnType>
  implements grammar3rdVisitor<AsnType> {
  public visitChildren(ctx: TypeAssignmentContext): AsnType {
    const asnTypeCtx = ctx.asnType();
    return asnTypeCtx.accept(new AsnTypeVisitor());
  }

  protected defaultResult(): AsnType {
    return new NullType();
  }
}
