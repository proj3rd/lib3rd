import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { AsnTypeContext, ConstraintContext, NamedTypeContext,
         SequenceOfTypeContext, SizeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { SequenceOf } from '../classes/sequenceOf';
import { SizeConstraint } from '../classes/sizeConstraint';
import { AsnTypeVisitor } from './asnType';
import { ConstraintVisitor } from './constraint';
import { ConstraintSpec } from './constraintSpec';
import { NamedTypeVisitor } from './namedType';
import { SizeConstraintVisitor } from './sizeConstraint';

/**
 * ANTLR4 grammar
 * ```
 * sequenceOfType  : SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)? OF_LITERAL (asnType | namedType )
 * ```
 */
export class SequenceOfTypeVisitor extends AbstractParseTreeVisitor<SequenceOf> implements ASN_3gppVisitor<SequenceOf> {
  public defaultResult(): SequenceOf {
    return undefined;
  }

  public visitChildren(sequenceOfTypeCtx: SequenceOfTypeContext): SequenceOf {
    const childCtxes = sequenceOfTypeCtx.children;
    let sequenceOfType: SequenceOf;
    const constraints: Array<ConstraintSpec | SizeConstraint> = [];
    childCtxes.forEach((childCtx) => {
      if (childCtx instanceof ConstraintContext) {
        constraints.push(childCtx.accept(new ConstraintVisitor()));
      }
      if (childCtx instanceof SizeConstraintContext) {
        constraints.push(childCtx.accept(new SizeConstraintVisitor()));
      }
      if (childCtx instanceof AsnTypeContext) {
        sequenceOfType = new SequenceOf(childCtx.accept(new AsnTypeVisitor()));
      }
      if (childCtx instanceof NamedTypeContext) {
        sequenceOfType = new SequenceOf(childCtx.accept(new NamedTypeVisitor()));
      }
    });
    if (sequenceOfType) {
      sequenceOfType.setConstraint(constraints);
    }
    return sequenceOfType;
  }
}
