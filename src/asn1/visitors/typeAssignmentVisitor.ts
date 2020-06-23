import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnType } from '../classes/asnType';
import { NullType } from '../classes/nullType';
import { TypeAssignmentContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AsnTypeVisitor } from './asnTypeVisitor';

/**
 * # Grammar
 * ```
 * typeAssignment: ASSIGN_OP asnType
 * ```
 */
export class TypeAssignmentVisitor extends AbstractParseTreeVisitor<AsnType>
  implements ASN_3gppVisitor<AsnType> {
  public visitChildren(ctx: TypeAssignmentContext): AsnType {
    const asnTypeCtx = ctx.asnType();
    return asnTypeCtx.accept(new AsnTypeVisitor());
  }

  protected defaultResult(): AsnType {
    return NullType.getInstance();
  }
}
