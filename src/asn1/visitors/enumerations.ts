import { log } from '../../utils/logging';
import { getContextName, getLogWithAsn1 } from '../utils';

import { AdditionalEnumerationVisitor } from './additionalEnumeration';
import { RootEnumerationVisitor } from './rootEnumeration';

/**
 * ANTLR4 grammar
 * ```
 * rootEnumeration (COMMA   ELLIPSIS exceptionSpec? (COMMA   additionalEnumeration )?)?
 * ```
 */
export class EnumerationsVisitor {
  public visitChildren(enumerationsCtx: any): any /* TODO */ {
    const childCtxes = enumerationsCtx.children;
    const rootEnumerationCtx = childCtxes[0];
    const enumerations = rootEnumerationCtx.accept(new RootEnumerationVisitor());
    const exceptionSpecCtx = childCtxes[3] && getContextName(childCtxes[3]) === 'exceptionSpec' ? childCtxes[3] : null;
    if (exceptionSpecCtx) {
      // TODO
      log.warn(getLogWithAsn1(enumerationsCtx, 'ExceptionSpec not supported:'));
    }
    const lastCtx = childCtxes[childCtxes.length - 1];
    const additionalEnumerationCtx = getContextName(lastCtx) === 'additionalEnumeration' ? lastCtx : null;
    if (additionalEnumerationCtx) {
      const additionalEnumeration = additionalEnumerationCtx.accept(new AdditionalEnumerationVisitor());
      enumerations.splice(enumerations.length, 0, '...', ...additionalEnumeration);
    }
    return enumerations;
  }
}
