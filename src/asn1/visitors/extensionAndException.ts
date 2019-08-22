import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

import { log } from '../../utils/logging';
import { getLogWithAsn1 } from '../utils';

import { ExtensionAndExceptionContext } from '../ASN_3gppParser';
import { ASN_3gppVisitor } from '../ASN_3gppVisitor';
import { ExtensionMarker } from '../classes/extensionMarker';

/**
 * ANTLR4 grammar
 * ```
 * extensionAndException :  ELLIPSIS  exceptionSpec?
 * ```
 */
export class ExtensionAndExceptionVisitor extends AbstractParseTreeVisitor<ExtensionMarker[]>
                                          implements ASN_3gppVisitor<ExtensionMarker[]> {
  public defaultResult(): ExtensionMarker[] {
    return [];
  }

  public visitChildren(extensionAndExceptionCtx: ExtensionAndExceptionContext): ExtensionMarker[] {
    const extensionAndException = [new ExtensionMarker()];
    const exceptionSpecCtx = extensionAndExceptionCtx.children[1];
    if (exceptionSpecCtx) {
      log.warn(getLogWithAsn1(extensionAndExceptionCtx, 'ExceptionSpec not supported:'));
    }
    return extensionAndException;
  }
}
