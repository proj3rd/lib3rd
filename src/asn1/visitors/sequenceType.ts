import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ComponentTypeListsContext, ExtensionAndExceptionContext,
         OptionalExtensionMarkerContext, SequenceTypeContext } from '../ASN_3gppParser';
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
      if (childCtx instanceof ExtensionAndExceptionContext) {
        sequenceType.splice(sequenceType.length, 0, ...childCtx.accept(new ExtensionAndExceptionVisitor()));
      } else if (childCtx instanceof OptionalExtensionMarkerContext) {
        sequenceType.splice(sequenceType.length, 0, ...childCtx.accept(new OptionalExtensionMarkerVisitor()));
      } else if (childCtx instanceof ComponentTypeListsContext) {
        sequenceType.splice(sequenceType.length, 0, ...childCtx.accept(new ComponentTypeListsVisitor()));
      } else if (childCtx instanceof TerminalNode) {
        // Do nothing
      } else {
        log.warn(getLogWithAsn1(sequenceTypeCtx, 'Not supported ASN1:'));
      }
    });
    return new Sequence(sequenceType);
  }
}
