import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ExtensionMarker } from '../classes/extensionMarker';

/**
 * ANTLR4 grammar
 * ```
 * extensionAndException :  ELLIPSIS  exceptionSpec?
 * ```
 */
export class ExtensionAndExceptionVisitor {
  public visitChildren(extensionAndExceptionCtx: any): any /* TODO */ {
    const extensionAndException = [new ExtensionMarker()];
    const exceptionSpecCtx = extensionAndExceptionCtx.children[1];
    if (exceptionSpecCtx) {
      log.warn(getLogWithAsn1(extensionAndExceptionCtx, 'ExceptionSpec not supported:'));
    }
    return extensionAndException;
  }
}
