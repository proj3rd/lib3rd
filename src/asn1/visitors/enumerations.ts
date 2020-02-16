import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { AdditionalEnumerationContext, EnumerationsContext, ExceptionSpecContext, RootEnumerationContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';
import { AdditionalEnumerationVisitor } from './additionalEnumeration';
import { EnumerationItem } from './enumerationItem';
import { RootEnumerationVisitor } from './rootEnumeration';

export type Enumerations = Array<EnumerationItem | ExtensionMarker>;

/**
 * ANTLR4 grammar
 * ```
 * rootEnumeration (COMMA   ELLIPSIS exceptionSpec? (COMMA   additionalEnumeration )?)?
 * ```
 */
export class EnumerationsVisitor extends AbstractParseTreeVisitor<Enumerations>
                                 implements ASN_3gppVisitor<Enumerations> {
  public defaultResult(): Enumerations {
    return [];
  }

  public visitChildren(enumerationsCtx: EnumerationsContext): Enumerations {
    const childCtxes = enumerationsCtx.children;
    const enumerations: Enumerations = [];
    childCtxes.forEach((childCtx) => {
      if (childCtx instanceof RootEnumerationContext) {
        enumerations.splice(0, 0, ...childCtx.accept(new RootEnumerationVisitor()));
      }
      if (childCtx instanceof ExceptionSpecContext) {
        // TODO
        log.warn(getLogWithAsn1(enumerationsCtx, 'ExceptionSpec not supported:'));
      }
      if (childCtx instanceof AdditionalEnumerationContext) {
        enumerations.splice(enumerations.length, 0, ...childCtx.accept(new AdditionalEnumerationVisitor()));
      }
      if (childCtx instanceof TerminalNode) {
        if (childCtx.text === '...') {
          enumerations.push(new ExtensionMarker());
        }
      }
    });
    return enumerations;
  }
}
