import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { Sequence } from '../classes/sequence';
import { ComponentTypeListsVisitor } from './componentTypeLists';
import { OptionalExtensionMarkerVisitor } from './optionalExtensionMarker';

/**
 * ANTLR4 grammar
 * ```
 * sequenceType :SEQUENCE_LITERAL L_BRACE
 * (extensionAndException  optionalExtensionMarker | componentTypeLists )?
 * R_BRACE
 * ```
 */
export class SequenceTypeVisitor {
  public visitChildren(sequenceTypeCtx: any): Sequence {
    const sequenceType = [];
    const childCtxes = sequenceTypeCtx.children;
    childCtxes.forEach((childCtx) => {
      switch (getContextName(childCtx)) {
        case 'extensionAndException': {
          log.warn(getLogWithAsn1(sequenceTypeCtx, 'extensionAndException Not supported:'));
          break;
        }
        case 'optionalExtensionMarker': {
          sequenceType.splice(sequenceType.length, 0, childCtx.accept(new OptionalExtensionMarkerVisitor()));
          break;
        }
        case 'componentTypeLists': {
          sequenceType.splice(sequenceType.length, 0, childCtx.accept(new ComponentTypeListsVisitor()));
          break;
        }
        case null: {
          break;
        }
        default: {
          log.warn(getLogWithAsn1(sequenceTypeCtx, 'Not supported ASN1:'));
          break;
        }
      }
    });
    return new Sequence(sequenceType);
  }
}
