import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { SequenceOf } from '../classes/sequenceOf';

import { AsnTypeVisitor } from './asnType';
import { ConstraintVisitor } from './constraint';
import { NamedTypeVisitor } from './namedType';
import { SizeConstraintVisitor } from './sizeConstraint';

/**
 * ANTLR4 grammar
 * ```
 * sequenceOfType  : SEQUENCE_LITERAL (L_PARAN (constraint | sizeConstraint) R_PARAN)? OF_LITERAL (asnType | namedType )
 * ```
 */
export class SequenceOfTypeVisitor {
  public visitChildren(sequenceOfTypeCtx: any): SequenceOf {
    const childCtxes = sequenceOfTypeCtx.children;
    let sequenceOfType: SequenceOf = null;
    const typeCtx = childCtxes[childCtxes.length - 1];
    let type = null;
    switch (getContextName(typeCtx)) {
      case 'asnType': {
        type = typeCtx.accept(new AsnTypeVisitor());
        break;
      }
      case 'namedType': {
        type = typeCtx.accept(new NamedTypeVisitor());
        break;
      }
      default: {
        log.warn(getLogWithAsn1(sequenceOfTypeCtx, 'Not supported ASN1:'));
        break;
      }
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
          let constraint = null;
          switch (getContextName(constraintCtx)) {
            case 'constraint': {
              constraint = constraintCtx.accept(new ConstraintVisitor());
              break;
            }
            case 'sizeConstraint': {
              constraint = constraintCtx.accept(new SizeConstraintVisitor());
              break;
            }
            default: {
              log.warn(getLogWithAsn1(sequenceOfTypeCtx, 'Not supported ASN1:'));
              break;
            }
          }
          if (constraint) {
            sequenceOfType.setConstraint(constraint);
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
