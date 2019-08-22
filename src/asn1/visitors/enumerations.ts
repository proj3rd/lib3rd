import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { AdditionalEnumerationContext, EnumerationsContext, ExceptionSpecContext } from '../ASN_3gppParser';
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
    const rootEnumerationCtx = childCtxes[0];
    const enumerations: Enumerations = rootEnumerationCtx.accept(new RootEnumerationVisitor());
    const exceptionSpecCtx = childCtxes[3] && childCtxes[3] instanceof ExceptionSpecContext ? childCtxes[3] : null;
    if (exceptionSpecCtx) {
      // TODO
      log.warn(getLogWithAsn1(enumerationsCtx, 'ExceptionSpec not supported:'));
    }
    const lastCtx = childCtxes[childCtxes.length - 1];
    const additionalEnumerationCtx = lastCtx instanceof AdditionalEnumerationContext  ? lastCtx : null;
    if (additionalEnumerationCtx) {
      const additionalEnumeration = additionalEnumerationCtx.accept(new AdditionalEnumerationVisitor());
      enumerations.splice(enumerations.length, 0, new ExtensionMarker(), ...additionalEnumeration);
    }
    return enumerations;
  }
}
