/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnType } from '../classes/asnType';
import { NullType } from '../classes/nullType';
import {
  AsnTypeContext,
  BuiltinTypeContext,
  ReferencedTypeContext,
} from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
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
  implements grammar3rdVisitor<AsnType> {
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
    const constraints = constraintCtxes
      .map((constraintCtx) => constraintCtx.accept(new ConstraintVisitor()));
    asnType.setConstraints(constraints);
    return asnType;
  }

  protected defaultResult(): AsnType {
    return new NullType();
  }
}
