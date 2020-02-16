import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { AsnTypeContext, ConstraintContext, NamedTypeContext,
         SequenceOfTypeContext, SizeConstraintContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { AsnType } from '../classes/asnType';
import { Constraint } from '../classes/constraint';
import { NamedType } from '../classes/namedType';
import { SequenceOf } from '../classes/sequenceOf';
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
    const typeCtx = childCtxes[childCtxes.length - 1];
    let type: AsnType | NamedType;
    if (typeCtx instanceof AsnTypeContext) {
      type = typeCtx.accept(new AsnTypeVisitor());
    } else if (typeCtx instanceof NamedTypeContext) {
      type = typeCtx.accept(new NamedTypeVisitor());
    } else {
      log.warn(getLogWithAsn1(sequenceOfTypeCtx, 'Not supported ASN1:'));
    }
    if (type) {
      sequenceOfType = new SequenceOf(type);
    }
    if (sequenceOfType) {
      switch (childCtxes.length) {
        case 3: {
          break;
        }
        case 6: {
          const constraintCtx = childCtxes[2];
          let constraints: Array<Constraint | ConstraintSpec>;
          if (constraintCtx instanceof ConstraintContext) {
            constraints = [constraintCtx.accept(new ConstraintVisitor())];
          } else if (constraintCtx instanceof SizeConstraintContext) {
            // FIXME
            constraints = [constraintCtx.accept(new SizeConstraintVisitor())];
          } else {
            log.warn(getLogWithAsn1(sequenceOfTypeCtx, 'Not supported ASN1:'));
          }
          if (constraints) {
            sequenceOfType.setConstraint(constraints);
          }
          break;
        }
        default: {
          log.warn(getLogWithAsn1(sequenceOfTypeCtx, 'Not supported ASN1:'));
          break;
        }
      }
    }
    return sequenceOfType;
  }
}
