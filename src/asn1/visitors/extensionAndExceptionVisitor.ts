import { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';
import { unimpl } from 'unimpl';
import { ExtensionMarker } from '../classes/extensionMarker';
import { ExtensionAndExceptionContext } from '../grammar/ASN_3gppParser';
import { ASN_3gppVisitor } from '../grammar/ASN_3gppVisitor';

/**
 * # Grammar
 * ```
 * extensionAndException: ELLIPSIS exceptionSpec?
 * ```
 */
export class ExtensionAndExceptionVisitor
  extends AbstractParseTreeVisitor<ExtensionMarker>
  implements ASN_3gppVisitor<ExtensionMarker> {
  public visitChildren(ctx: ExtensionAndExceptionContext): ExtensionMarker {
    const exceptionSpecCtx = ctx.exceptionSpec();
    if (exceptionSpecCtx !== undefined) {
      unimpl(ctx.text);
    }
    return ExtensionMarker.getInstance();
  }

  protected defaultResult(): ExtensionMarker {
    return unimpl();
  }
}
