import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { Sequence } from '../classes/sequence';
import { ComponentTypeListsVisitor } from './componentTypeLists';

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
    let sequenceType = null;
    const childCtxes = sequenceTypeCtx.children;
    switch (childCtxes.length) {
      case 3: {
        // Empty sequence
        sequenceType = [];
        break;
      }
      case 4: {
        // SEQUENCE_LITERAL L_BRACE componentTypeLists R_BRACE
        const componentTypeListsCtx = childCtxes[2];
        sequenceType = componentTypeListsCtx.accept(new ComponentTypeListsVisitor());
        break;
      }
      case 5: {
        // sequenceType :SEQUENCE_LITERAL L_BRACE extensionAndException optionalExtensionMarker R_BRACE
        // TODO
        break;
      }
      default: {
        log.warn(getLogWithAsn1(sequenceTypeCtx, 'Not supported ASN1:'));
        break;
      }
    }
    return new Sequence(sequenceType);
  }
}
