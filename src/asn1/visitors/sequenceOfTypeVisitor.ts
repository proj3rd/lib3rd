/* eslint-disable class-methods-use-this */
import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { Constraint } from '../classes/constraint';
import { NamedType } from '../classes/namedType';
import { NullType } from '../classes/nullType';
import { SequenceOfType } from '../classes/sequenceOfType';
import { SequenceOfTypeContext } from '../grammar/grammar3rdParser';
import { grammar3rdVisitor } from '../grammar/grammar3rdVisitor';
import { AsnType } from '../types/asnType';
import { AsnTypeVisitor } from './asnTypeVisitor';
import { NamedTypeVisitor } from './namedTypeVisitor';
import { SizeConstraintVisitor } from './sizeConstraintVisitor';

/**
 * # Grammar
 * ```
 * sequenceOfType:
 *   SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)?
 *   OF_LITERAL (asnType | namedType )
 * ```
 */
export class SequenceOfTypeVisitor
  extends AbstractParseTreeVisitor<SequenceOfType>
  implements grammar3rdVisitor<SequenceOfType> {
  public visitChildren(ctx: SequenceOfTypeContext): SequenceOfType {
    let baseType: AsnType | NamedType | undefined;
    let constraint: Constraint | undefined;
    const constraintCtx = ctx.constraint();
    if (constraintCtx !== undefined) {
      unimpl(ctx.text);
    }
    const sizeConstraintCtx = ctx.sizeConstraint();
    if (sizeConstraintCtx !== undefined) {
      const sizeConstraint = sizeConstraintCtx.accept(
        new SizeConstraintVisitor(),
      );
      constraint = new Constraint(sizeConstraint);
    }
    const asnTypeCtx = ctx.asnType();
    if (asnTypeCtx !== undefined) {
      baseType = asnTypeCtx.accept(new AsnTypeVisitor());
    }
    const namedTypeCtx = ctx.namedType();
    if (namedTypeCtx !== undefined) {
      baseType = namedTypeCtx.accept(new NamedTypeVisitor());
    }
    if (baseType === undefined) {
      throw Error();
    }
    return new SequenceOfType(baseType, constraint);
  }

  protected defaultResult(): SequenceOfType {
    return new SequenceOfType(new NullType(), undefined);
  }
}
