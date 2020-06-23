import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnType } from '../classes/asnType';
import { NullType } from '../classes/nullType';
import {
  AsnTypeContext,
  BuiltinTypeContext,
  ReferencedTypeContext,
} from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { BuiltinTypeVisitor } from './builtinTypeVisitor';
import { ConstraintVisitor } from './constraintVisitor';
import { ReferencedTypeVisitor } from './referencedTypeVisitor';

/**
 * # Grammar
 * ```
 * asnType: (builtinType | referencedType) (constraint)*
 * ```
 */
export class AsnTypeVisitor extends AbstractParseTreeVisitor<AsnType>
  implements ASN_3gppVisitor<AsnType> {
  public visitChildren(ctx: AsnTypeContext): AsnType {
    let asnType: AsnType | undefined;
    const firstCtx = ctx.getChild(0);
    if (firstCtx instanceof BuiltinTypeContext) {
      asnType = firstCtx.accept(new BuiltinTypeVisitor());
    } else if (firstCtx instanceof ReferencedTypeContext) {
      asnType = firstCtx.accept(new ReferencedTypeVisitor());
    } else {
      throw Error();
    }
    if (asnType === undefined) {
      throw Error();
    }
    const constraintCtxes = ctx.constraint();
    const constraints = constraintCtxes.map((constraintCtx) =>
      constraintCtx.accept(new ConstraintVisitor())
    );
    asnType.setConstraints(constraints);
    return asnType;
  }

  protected defaultResult(): AsnType {
    return NullType.getInstance();
  }
}
