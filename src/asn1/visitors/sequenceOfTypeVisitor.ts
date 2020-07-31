import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { AsnType } from '../classes/asnType';
import { Constraint } from '../classes/constraint';
import { NamedType } from '../classes/namedType';
import { NullType } from '../classes/nullType';
import { SequenceOfType } from '../classes/sequenceOfType';
import { SubtypeConstraint } from '../classes/subtypeConstraint';
import { Unions } from '../classes/unions';
import { SequenceOfTypeContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';
import { AsnTypeVisitor } from './asnTypeVisitor';
import { NamedTypeVisitor } from './namedTypeVisitor';
import { SizeConstraintVisitor } from './sizeConstraintVisitor';

/**
 * # Grammar
 * ```
 * sequenceOfType: SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)? OF_LITERAL (asnType | namedType )
 * ```
 */
export class SequenceOfTypeVisitor
  extends AbstractParseTreeVisitor<SequenceOfType>
  implements ASN_3gppVisitor<SequenceOfType> {
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
        new SizeConstraintVisitor()
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
    return new SequenceOfType(NullType.getInstance(), undefined);
  }
}
