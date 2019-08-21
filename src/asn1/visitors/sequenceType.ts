import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { SequenceTypeContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { Sequence } from '../classes/sequence';
import { ComponentTypeListsVisitor } from './componentTypeLists';
import { ExtensionAndExceptionVisitor } from './extensionAndException';
import { OptionalExtensionMarkerVisitor } from './optionalExtensionMarker';

/**
 * ANTLR4 grammar
 * ```
 * sequenceType :SEQUENCE_LITERAL L_BRACE
 * (extensionAndException  optionalExtensionMarker | componentTypeLists )?
 * R_BRACE
 * ```
 */
export class SequenceTypeVisitor extends AbstractParseTreeVisitor<Sequence> implements ASN_3gppVisitor<Sequence> {
  public defaultResult(): Sequence {
    return undefined;
  }

  public visitChildren(sequenceTypeCtx: SequenceTypeContext): Sequence {
    const sequenceType = [];
    const childCtxes = sequenceTypeCtx.children;
    childCtxes.forEach((childCtx) => {
      switch (getContextName(childCtx)) {
        case 'extensionAndException': {
          sequenceType.splice(sequenceType.length, 0, ...childCtx.accept(new ExtensionAndExceptionVisitor()));
          break;
        }
        case 'optionalExtensionMarker': {
          sequenceType.splice(sequenceType.length, 0, ...childCtx.accept(new OptionalExtensionMarkerVisitor()));
          break;
        }
        case 'componentTypeLists': {
          sequenceType.splice(sequenceType.length, 0, ...childCtx.accept(new ComponentTypeListsVisitor()));
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
